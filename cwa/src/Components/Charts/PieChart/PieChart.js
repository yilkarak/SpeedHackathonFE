import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
const data = {
    labels: ['Slice 1', 'Slice 2', 'Slice 3', 'Slice 4'],
    datasets: [
      {
        data: [20, 30, 10, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71'],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'My Pie Chart',
    },
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
    }
  };
  
  export default function PieChart(props){
    return(
        <div className='Piechart' >
            <h2 className='Piechart-header'>{props.heading}</h2>
            <Pie data={data} options={options} />
        </div>
    );
};
  