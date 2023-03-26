import React, { Fragment, useContext } from "react";
import CustomerContext from "../state/Context";
import LoginPage from "../Pages/LoginPage/LoginPage";

export default function AuthRoute(props){
    const ctx = useContext(CustomerContext);
    return(
        <Fragment>
            {ctx.customerId == null ? <LoginPage/> : props.children}
        </Fragment>
    )
}