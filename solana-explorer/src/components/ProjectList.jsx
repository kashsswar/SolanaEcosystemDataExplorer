import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data'); // Replace with your actual API endpoint
                setProjects(response.data); // Assuming response.data directly contains the projects array
            } catch (error) {
                console.error('Error fetching projects:', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    setError(`Server responded with ${error.response.status} - ${error.response.data.message}`);
                } else if (error.request) {
                    // The request was made but no response was received
                    setError('No response received from server. Please check your network connection.');
                } else {
                    // Something else happened in setting up the request
                    setError('Error making the request to the server.');
                }
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Solana Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
