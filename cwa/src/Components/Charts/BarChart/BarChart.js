import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import "./BarChart.css";

const data = {
  labels: ['Avg. Driver', 'Personal'],
  datasets: [
    {
      label: 'Frequency of Hard Braking',
      backgroundColor: ['#f44336', '#2196f3'],
      data: [25, 50]
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

const BarChart = (props) => (
  <div className='Barchart'>
    <h2 className='Barchart-header'>{props.heading}</h2>
    <Bar data={data} options={options} />
  </div>
);

export default BarChart;
