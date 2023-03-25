import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
function BaseLayout(props){
    return(
        <React.Fragment>
            <NavBar heading={props.heading}/>
                {props.children}
            <Footer/>
        </React.Fragment>
    )
}
export default BaseLayout;