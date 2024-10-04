import React from "react";
import "../../styles/css/main.css";
import Notification from "./Notification";
import PersonalInformation from "./PersonalInformation";

const Main = () => {
    return (
        <div className="main">
            <Notification/>
            <PersonalInformation/>
        </div>
    )
}

export default Main;