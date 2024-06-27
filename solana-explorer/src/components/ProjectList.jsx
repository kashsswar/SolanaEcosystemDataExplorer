import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projectlist.css'

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                setProjects(response.data.projects); // Assuming response.data.projects contains the projects array
            } catch (error) {
                if (error.response) {
                    setError(`Server responded with ${error.response.status} - ${error.response.data.message}`);
                } else if (error.request) {
                    setError('No response received from server. Please check your network connection.');
                } else {
                    setError('Error making the request to the server.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="project-list-container">Loading...</div>;
    }

    if (error) {
        return (
            <div className="project-list-container error-message">
                <p>Error: {error}</p>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="project-list-container">
            <h2>Solana Projects</h2>
            <ul className="project-list">
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
