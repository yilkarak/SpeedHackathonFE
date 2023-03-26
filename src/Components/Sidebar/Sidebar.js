import { useNavigate } from "react-router-dom";
import * as routes from "../../routes/manifest";
import "./Sidebar.css";

export default function Sidebar(props){
    const navigate = useNavigate();

    const handleDashboardLink = (event, id) => {
        event.preventDefault();
        navigate(`${routes.Dashboard}#${id}`);
        setTimeout(() => {
          const upgradesElement = document.getElementById('upgrades');
          if (upgradesElement) {
            upgradesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      };
    

    return(
        <div className="sidebar" id="container">
            <a onClick={() => {navigate(routes.Dashboard)}} className={props.active == "Dashboard" ? "active": ""}>Dashboard</a>
            <a onClick={() => {navigate(routes.Rewards)}} className={props.active == "Rewards" ? "active": ""}>Rewards</a>
            <a href="#" onClick={event => handleDashboardLink(event,"upgrades")}  className={props.active == "Upgrades" ? "active": ""}>Upgrades</a>
            <a href="#" onClick={event => handleDashboardLink(event,"music")}  className={props.active == "Music" ? "active": ""}>Music</a>
            <a href="#" onClick={event => handleDashboardLink(event,"songs")}  className={props.active == "Maintenance" ? "active": ""}>Maintenance</a>
            <a href="#" onClick={event => handleDashboardLink(event,"safety")} className={props.active == "Safety" ? "active": ""}>Safety</a>
        </div>
    )
}