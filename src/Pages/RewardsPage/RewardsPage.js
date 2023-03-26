import React, { useEffect, useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';

import CustomerContext from '../../state/Context';

import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import Sidebar from '../../Components/Sidebar/Sidebar';
import RewardsBarChart from '../../Components/Charts/RewardsBarChart/RewardsBarChart';
import ProgressBar from './ProgressBar';

import "./RewardsPage.css";
import { GetPoints } from '../../Hooks/GetPoints';

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

const RewardsPage = () => {
    const ctx = useContext(CustomerContext);
    const [userProgressData, setUserProgressData] = useState(null);
    const res = GetPoints(ctx.customerId);
    console.log(res)
    useEffect(() => {

        let highestLevelAchieved = {
            title: "Level 0: Beginner",
            threshold: 0,
            target: 350
        };
        
        levels.forEach(level => {
            if (userProgressData == null && res.points >= level.threshold){
                highestLevelAchieved = level;
            }
        });

        setUserProgressData({
            title: highestLevelAchieved.title,
            threshold: highestLevelAchieved.threshold,
            target: highestLevelAchieved.target,
            points: res.points
            }
        )
    }, []);

    return(
        <BaseLayout heading="Rewards">
            <Sidebar active="Rewards"/>
            <div className="content">
                <div className='container'>
                    <div className='row mt-5'>
                        <div className="col-sm">
                            <ProgressBar userData={
                                userProgressData ? {
                                    title: userProgressData.title,
                                    points: userProgressData.points,
                                    percentage: `${(userProgressData.points / userProgressData.target)*100}%`
                                } : null
                            }/>
                        </div>
                    </div>
                    <React.Fragment>
                        <div className='row mt-5'>
                            <div className="factors-list">
                                <h2>What's going well: </h2>
                                <ul>
                                    {res &&
                                        res.good.map((item, index) => {
                                            return (
                                                <li key={`good-item-${index}`}>{item.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            {res &&
                                res.good.map((item, index) => {
                                    return (
                                        <div className="col-sm" key={index}>
                                            <RewardsBarChart chartData={item} goodScore={true} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
                    <hr className='mt-5'/>

                    <React.Fragment>
                        <div className='row mt-5'>
                            <div className="factors-list">
                                <h2>What's impacting your score: </h2>
                                <ul>
                                    {res &&
                                        res.bad.map((item, index) => {
                                            return (
                                                <li key={`bad-item-${index}`}>{item.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            {res &&
                                res.bad.map((item, index) => {
                                    return (
                                        <div className="col-sm" key={index}>
                                            <RewardsBarChart chartData={item} goodScore={false} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
                    <hr className='mt-5 mb-5'/>
                </div>
            </div>
            
        </BaseLayout>
    )
};

export default RewardsPage;