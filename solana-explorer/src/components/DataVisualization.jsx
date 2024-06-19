import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const DataVisualization = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchChartData = async () => {
            const response = await axios.get('http://localhost:5000/api/data');
            const data = response.data;
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
        };
        fetchChartData();
    }, []);

    return (
        <div>
            <h2>Data Visualization</h2>
            <Line data={chartData} />
        </div>
    );
};

export default DataVisualization;
