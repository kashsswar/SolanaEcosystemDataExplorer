import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const DataVisualization = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                const data = response.data;
                if (data && Array.isArray(data)) {
                    const formattedData = {
                        labels: data.map(d => d.date),
                        datasets: [
                            {
                                label: 'Value',
                                data: data.map(d => d.value),
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Data Visualization</h2>
            <Line data={chartData} />
        </div>
    );
};

export default DataVisualization;
