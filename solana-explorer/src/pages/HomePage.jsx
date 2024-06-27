import React from 'react';
import ProjectList from '../components/ProjectList';
import DataVisualization from '../components/DataVisualization';
import AdvancedSearch from '../components/AdvancedSearch';
import './Homepage.css'; // Import stylesheet for HomePage

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1 className="title">Solana Ecosystem Explorer</h1>
            </header>
            <main className="content">
                <section className="section">
                    <h2>Advanced Search</h2>
                    <AdvancedSearch />
                </section>
                <section className="section">
                    <h2>Solana Projects</h2>
                    <ProjectList />
                </section>
                <section className="section">
                    <h2>Data Visualization</h2>
                    <DataVisualization />
                </section>
            </main>
        </div>
    );
};

export default HomePage;
