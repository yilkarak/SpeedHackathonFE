import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';

import CustomerContext from '../../state/Context';

import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import Sidebar from '../../Components/Sidebar/Sidebar';
import RadarChart from '../../Components/Charts/RadarChart/RadarChart';
import LevelProgressChart from '../../Components/Charts/LevelProgressChart/LevelProgressChart';
import Map from '../../Components/Map/Map';

import {ReactComponent as SensorSVG} from '../../Components/SVG/sensor.svg';
import {ReactComponent as CameraSVG} from '../../Components/SVG/camera-video.svg';
import {ReactComponent as BluetoothSVG} from '../../Components/SVG/bluetooth.svg';
import {ReactComponent as KeySVG} from '../../Components/SVG/key.svg';
import {ReactComponent as SpeakerSVG} from '../../Components/SVG/speaker.svg';
import {ReactComponent as GearSVG} from '../../Components/SVG/gear.svg';

import './Dashboard.css';
import SongPredictions from '../../Components/SongPredictions/SongPredictions';
import MaintenancePredictions from '../../Components/MaintenancePrediction/MaintenancePredictions';
import Safety from '../../Components/Safety/Safety';

const recommendations = [
    "Rear-view cameras or sensors",
    "Bluetooth connectivity",
    "Keyless entry systems",
    "Audio systems (stereo, speakers, subwoofers, amplifiers)"
]

const recommendationsSVG = [
    {
        title: "Parking assist",
        svg: <SensorSVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>
    },
    {
        title: "Bluetooth connectivity",
        svg: <BluetoothSVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>
    },
    {
        title: "Keyless entry systems",
        svg: <KeySVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>
    },
    {
        title: "Rear-view cameras or sensors",
        svg: <CameraSVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>
    },
    {
        title: "Audio systems (stereo, speakers, subwoofers, amplifiers)",
        svg: <SpeakerSVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>
    },
]

const Dashboard = () => {
    const ctx = useContext(CustomerContext);
    const navigate = useNavigate();

    return(
        <BaseLayout heading="Dashboard">
            <Sidebar active="Dashboard"/>
            <div className="content">
                <div className='container-fluid mt-5'>
         
                    <div className='row'>
                        <div className="col-sm">
                         <LevelProgressChart />
                        </div>
                        <div className="col-sm" style={{width: "1rem", heigh: '1rem'}}>
                          <RadarChart/>
                        </div>
                        <div className="col-sm">
                            <Map />
                        </div>
                    </div>
                    <div className='row mt-5' style={{color: '#333'}} >
                        <h3 className='mt-2' style={{color:'#333' , width: '100%'}} >
                            Recommended Upgrades
                        </h3>
                        {
                            recommendations.map((recommendation, index) => {
                                let svg = null;
                                recommendationsSVG.forEach(item => {
                                    if (item.title == recommendation){
                                        svg = item.svg;
                                    }
                                });

                                return (
                                    <div 
                                    className="col-sm upgrade-recommendation-container" 
                                    style={{paddingBottom:'25px', color: '#333', width: '100%'}} 
                                    key={index}
                                    onClick={() => {navigate(routes.Manufacturer)}}>
                                        {svg ? svg : <GearSVG style={{color: '#333', width: '70%', height: '70%', marginLeft:'15%'}}/>}
                                        <h4 style={{ color: 'inherit', width: '100%', textAlign: 'center'}}>
                                            {recommendation}
                                        </h4>

                                    </div>
                                )
                            })
                        }
                        <div id="upgrades"></div>
                    </div>
                    <SongPredictions id="songs" />
                    <MaintenancePredictions id="maintenance" />
                    <Safety id="safety" />
                </div>
            </div>
            
        </BaseLayout>
    )
};

export default Dashboard;
