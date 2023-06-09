import React, { useContext, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { GetPoints } from '../../../Hooks/GetPoints';
import CustomerContext from '../../../state/Context';
Chart.register(CategoryScale);
const levels = [
    {
        title: "Level 1: Good Driver",
        threshold: 350,
        target: 700
    },
    {
        title: "Level 2: You're Great",
        threshold: 700,
        target: 1000
    },
    {
        title: "Level 3: Expert Driver",
        threshold: 1000,
        target: 9999999
    },
];

export default function LevelProgressChart(){
    const ctx = useContext(CustomerContext);
    const [userProgressData, setUserProgressData] = useState(null);
    const [res, setRes] = useState(null);

    useEffect(() => {

        fetch('http://localhost:8080/safetyconcerns', {
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        }).then((response) => {
        if (response.ok){
            response.json().then((data) => {

                const points = GetPoints(ctx.customerId, data);
                console.log(points)
                
                setRes(points);

                let highestLevelAchieved = {
                    title: "Level 0: Beginner",
                    threshold: 0,
                    target: 350
                };
                
                levels.forEach(level => {
                    if (userProgressData == null && points.points >= level.threshold){
                        highestLevelAchieved = level;
                    }
                });
        
                setUserProgressData({
                    title: highestLevelAchieved.title,
                    threshold: highestLevelAchieved.threshold,
                    target: highestLevelAchieved.target,
                    points: points.points
                    }
                )

                console.log(userProgressData)
            })
        }
        else{
            alert("Couldn't Load");
        }
        })
    }, []);

    const data = {
        labels: ['Points Achieved', 'Points Remaining'],
        datasets: [
          {
            data: [
                userProgressData == null? 0 : (userProgressData.points-userProgressData.threshold),
                userProgressData == null? 100: (userProgressData.target - userProgressData.points),
            ],
            backgroundColor: ['#2ECC71', '#FF6384'],
            hoverBackgroundColor: ['#2ECC71', '#FF6384'],
          },
        ],
      };
      const options = {
        title: {
          display: true,
          text: '',
        },
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0
            }
        }
      };

      
    return(
        <div style={{width: '100%', height:'100%'}}>
            <h2 style={{ textAlign: 'center'}}>
                {userProgressData && userProgressData.title}
            </h2>
            <Pie data={data} options={options} />
        </div>
    );
}