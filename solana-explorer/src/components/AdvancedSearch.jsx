import React, { useState } from 'react';
import axios from 'axios';

const AdvancedSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`http://localhost:5000/api/data?search=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for projects..."
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdvancedSearch;
