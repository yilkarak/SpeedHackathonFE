import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
export default function RewardsBarChart(props){
    const chartData = {
        labels: ['Personal', 'Avg. Driver'],
        datasets: [
          {
            label: props.chartData.title,
            backgroundColor: [
                props.goodScore ? 'rgb(75, 192, 192)' : '#f44336', 
                props.goodScore ? 'rgb(54, 162, 235)': 'rgb(54, 162, 235)', 
            ],
            data: [props.chartData.driver, props.chartData.average]
          }
        ]
      };
    
    const options = {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true
            }
        }
        ],
        xAxes: [
        {
            type: 'category'
        }
        ]
    }
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    )
};
