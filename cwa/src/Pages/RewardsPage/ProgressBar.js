
import React, { useContext} from 'react';
import CustomerContext from '../../state/Context';
import profileImage from './profile.png';
import "./ProgressBar.css"
import RedeemButton from './RedeemButton';

export default function ProgressBar(props){
    const ctx = useContext(CustomerContext);
    

    return(
        <React.Fragment>
            <div class="progress-container">
                <div class="profile-container">
                    <img src={profileImage} alt="Profile Picture" class="profile-picture" />
                    <p class="profile-name">{ctx.customerId}</p>
                    {props.userData &&<RedeemButton points={props.userData.points}/>}
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress" 
                        style={{width:`${props.userData? props.userData.percentage : "100%"}`}}
                        data-label={props.userData? props.userData.title: 'user-level-unkown'}
                        >
                            <p class="profile-level">
                                {props.userData ? props.userData.title : ""}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}