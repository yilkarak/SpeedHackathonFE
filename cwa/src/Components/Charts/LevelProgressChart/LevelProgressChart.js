import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

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

const userData = {
    points: 299
}

export default function LevelProgressChart(){
    const [userProgressData, setUserProgressData] = useState(null);

    useEffect(() => {
        let highestLevelAchieved = {
            title: "Level 0: Beginner",
            threshold: 0,
            target: 350
        };
        
        levels.forEach(level => {
            if (userProgressData == null && userData.points >= level.threshold){
                highestLevelAchieved = level;
            }
        });

        setUserProgressData({
            title: highestLevelAchieved.title,
            threshold: highestLevelAchieved.threshold,
            target: highestLevelAchieved.target,
            points: userData.points
            }
        )
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
        <div style={{width: '100%'}}>
            <h2 style={{width: '100%', textAlign: 'center'}}>
                {userProgressData && userProgressData.title}
            </h2>
            <Pie data={data} options={options} />
        </div>
    );
}