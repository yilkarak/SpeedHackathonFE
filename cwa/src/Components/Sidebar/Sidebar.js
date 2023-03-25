import { useNavigate } from "react-router-dom";
import * as routes from "../../routes/manifest";
import "./Sidebar.css";

export default function Sidebar(){
    const navigate = useNavigate();

    return(
        <div className="sidebar">
            <a onClick={() => {navigate(routes.Dashboard)}} className="active" >Dashboard</a>
            <a onClick={() => {navigate(routes.Rewards)}}>Rewards</a>
            <a onClick={() => {navigate(routes.Login)}}>Accessories</a>
            <a onClick={() => {navigate(routes.Login)}}>Safety</a>
        </div>
    )
}