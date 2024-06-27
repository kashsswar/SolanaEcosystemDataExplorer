import React, { useState } from 'react';
import axios from 'axios';
import './Advancedsearch.css'

const AdvancedSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
            setResults(response.data.body.search_result.profiles);
            setError(null); // Clear error state on successful search
        } catch (error) {
            console.error('Error searching for profiles:', error);
            setError('Failed to search for profiles');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="advanced-search-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for projects..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <div className="error-message">Error: {error}</div>}
            <ul className="results-list">
                {results.map(result => (
                    <li key={result.id} className="result-item">
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdvancedSearch;
