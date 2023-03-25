import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';

import CustomerContext from '../../state/Context';

import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import Sidebar from '../../Components/Sidebar/Sidebar';
import BarChart from '../../Components/Charts/BarChart/BarChart';
import PieChart from '../../Components/Charts/PieChart/PieChart';
import RadarChart from '../../Components/Charts/RadarChart/RadarChart';
import LevelProgressChart from '../../Components/Charts/LevelProgressChart/LevelProgressChart';

const Dashboard = () => {
    const ctx = useContext(CustomerContext);

    return(
        <BaseLayout heading="Dashboard">
            <Sidebar/>
            <div className="content">
                {ctx.customerId}
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm">
                            <RadarChart/>
                        </div>
                        <div className="col-sm">
                            <LevelProgressChart />
                        </div>
                    </div>
                </div>
            </div>
            
        </BaseLayout>
    )
};

export default Dashboard;
