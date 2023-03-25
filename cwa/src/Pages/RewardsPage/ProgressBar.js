
import { useContext } from 'react';
import CustomerContext from '../../state/Context';
import "./ProgressBar.css"

export default function ProgressBar(){
    const ctx = useContext(CustomerContext);

    return(
        <div class="progress-container">
            <div class="profile-container">
                <img src="profile-picture.jpg" alt="Profile Picture" class="profile-picture" />
                <p class="profile-name">{ctx.customerId}</p>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress" style={{width:"75%"}} data-label="Level 5"></div>
                </div>
                <p class="profile-level">Level 5</p>
            </div>
        </div>
    )
}