import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './Datavisualisation.css'

const DataVisualization = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/fetch?id=ID-1'); // Replace with actual profile ID
                const data = response.data;
                if (data) {
                    const formattedData = {
                        labels: data.labels, // Assuming labels are fetched from response data
                        datasets: [
                            {
                                label: 'Value',
                                data: data.values, // Assuming data points are fetched from response data
                                borderColor: 'rgba(75, 192, 192, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            }
                        ]
                    };
                    setChartData(formattedData);
                } else {
                    throw new Error('Data format is incorrect');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChartData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="data-visualization">
            <h2>Data Visualization</h2>
            <div className="chart-container">
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default DataVisualization;
