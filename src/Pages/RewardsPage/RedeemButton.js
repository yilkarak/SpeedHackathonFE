import { useNavigate } from "react-router-dom";
import * as routes from "../../routes/manifest";

export default function RedeemButton(props){
    const navigate = useNavigate();

    return (
        <button className="button" onClick={() => {navigate(routes.Manufacturer)}}>{`Redeem Points: ${props.points}`}</button>
    )
}