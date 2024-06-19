import React from 'react';
import ProjectList from '../components/ProjectList';
import DataVisualization from '../components/DataVisualization';
import AdvancedSearch from '../components/AdvancedSearch';

const HomePage = () => {
    return (
        <div>
            <h1>Solana Ecosystem Explorer</h1>
            <AdvancedSearch />
            <ProjectList />
            <DataVisualization />
        </div>
    );
};

export default HomePage;
