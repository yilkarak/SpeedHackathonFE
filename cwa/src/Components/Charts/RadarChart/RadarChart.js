import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
const data = {
    labels: ['Speed', 'RMP', 'Lane Changes', 'Fuel Consumption', 'Time Spent Driving', 'Distance', 'Gear Changes'],
    datasets: [{
        label: 'Personal Statistics',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Avg. Driver Statistics',
        data: [28, 60, 40, 79, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
  };
  
  const options = {
    title: {
      display: true,
      text: 'My Radar Chart',
    }
  };
  
  export default function RadarChart(props){
    return(
        <div>
            <Radar data={data} options={options} />
        </div>
    );
  }
  