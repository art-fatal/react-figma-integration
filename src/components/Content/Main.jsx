import React from "react";
import "../../styles/css/main.css";
import Notification from "./Notification";
import PersonalInformation from "./PersonalInformation";
import DeleteAccount from "./DeleteAccount";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="main">
            <Notification/>
            <PersonalInformation/>
            <DeleteAccount/>
            <Footer/>
        </div>
    )
}

export default Main;