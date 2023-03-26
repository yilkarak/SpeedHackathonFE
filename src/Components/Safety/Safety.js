import { useContext } from "react";
import { GetPoints } from "../../Hooks/GetPoints";
import CustomerContext from "../../state/Context";
import RewardsBarChart from "../Charts/RewardsBarChart/RewardsBarChart";

export default function Safety(){
    const ctx = useContext(CustomerContext);
    const res = GetPoints(ctx.customerId);
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