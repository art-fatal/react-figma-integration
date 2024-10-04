import React from "react";
import "../../styles/css/notification.css";
import career from "../../img/career.svg";

const Notification = () => {
    return (
        <div className="notification">
            <div className="notification-illustration">
                <img src={career} alt="Notification"/>
            </div>
            <div className="notification-content">
                <h3 className="notification-title">
                    Premium Account
                </h3>
                <span className="notification-description">
                    You have a premium account, granting you access to all the remarkable features offered by ResumeDone.
                    With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes
                    and cover letters in both PDF and Word formats.
                </span>
            </div>
        </div>
    )
}

export default Notification;