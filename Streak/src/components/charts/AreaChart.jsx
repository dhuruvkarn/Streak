import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend ,Filler} from 'chart.js';
import { generateRandomData } from '../../Constant';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler);

const AreaChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [...generateRandomData(7)],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },  
        },
        scales: {
            x: {
                display: false 
            },
            y: {
                display: false
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default AreaChart;
