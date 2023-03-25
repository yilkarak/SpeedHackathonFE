import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Frequency of Hard Braking', '', 'Frequency of Seatbelt Usage', 'Frequency of Hard Accessories', 'Label 5', 'Label 6', 'Label 7'],
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
        data: [28, 48, 40, 19, 96, 27, 100],
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
        <div style={{ height: '100%', width: '100%'}}>
            <Radar data={data} options={options} />
        </div>
    );
  }
  