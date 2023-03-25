import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';

import CustomerContext from '../../state/Context';

import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import Sidebar from '../../Components/Sidebar/Sidebar';
import RewardsBarChart from '../../Components/Charts/RewardsBarChart/RewardsBarChart';
import ProgressBar from './ProgressBar';

const apiData = {
    good: [
        {
            title: "Frequency of Hard Braking",
            average: 120,
            driver: 20
        },
        {
            title: "Frequency of Seatbel Usage",
            average: 50,
            driver: 53
        },
        {
            title: "Average Time Spent Driving",
            average: 100,
            driver: 350
        }
    ],
    bad: [
        {
            title: "Frequency of Hard Acceleration",
            average: 50,
            driver: 75
        },
        {
            title: "Frequency of Sudden Lane Changes",
            average: 20,
            driver: 35
        }
    ]
}

const RewardsPage = () => {
    const ctx = useContext(CustomerContext);

    return(
        <BaseLayout heading="Rewards">
            <Sidebar/>
            <div className="content">
                <div className='container'>
                    <div className='row mt-5'>
                        <div className="col-sm">
                            <ProgressBar/>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <h4 className='mb-3'>
                            What's going well!
                        </h4>
                        {
                            apiData.good.map((item, index) => {
                                return (
                                    <div className="col-sm" key={index}>
                                        <RewardsBarChart chartData={item} goodScore={true} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr className='mt-5'/>
                    <div className='row mt-5'>
                        <h4 className='mb-3'>
                            What's impacting your score:
                        </h4>
                        {
                            apiData.bad.map((item, index) => {
                                return (
                                    <div className="col-sm" key={index}>
                                        <RewardsBarChart chartData={item} goodScore={false} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </BaseLayout>
    )
};

export default RewardsPage;