import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend , BarElement } from 'chart.js';
import { generateRandomData } from '../../Constant';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [...generateRandomData(7)],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart Example'
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
