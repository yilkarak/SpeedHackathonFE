import { useContext, useState, useEffect } from "react";
import { GetPoints } from "../../Hooks/GetPoints";
import CustomerContext from "../../state/Context";
import RewardsBarChart from "../Charts/RewardsBarChart/RewardsBarChart";

export default function Safety(){
    const ctx = useContext(CustomerContext);
    const [res, setRes] = useState(null);

    useEffect(() => {

        fetch('http://localhost:8080/safetyconcerns', {
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        }).then((response) => {
        if (response.ok){
            response.json().then((data) => {
                
                setRes(GetPoints(ctx.customerId, data))
            })
        }
        else{
            alert("Couldn't Load");
        }
        })
    }, []);
    return (
        <div className='row mt-5'>
            <h4>
                Safety Warnings
            </h4>
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
        </div>
    )
}