import React from "react";
import "../../styles/css/personal-information.css";
import avatar from "../../img/avatar-2.png";
import checked from "../../img/checked.svg";

const PersonalInformation = () => {

    return (
        <div className="main-item personal-information">
            <h4 className="personal-information-title">Personal Information</h4>
            <div className="personal-information-content">
                <div className="gap-4 flex item-1 flex-col w-full">
                    <div className="personal-information-field double">
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">First Name</label>
                            <input type="text" id="input" placeholder="Petter" className="input-element"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">Last Name</label>
                            <input type="text" id="input" placeholder="Cetera" className="input-element"/>
                        </div>
                    </div>
                    <div className="personal-information-field double">
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">City</label>
                            <input type="text" id="input" placeholder="London" className="input-element"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">Postal Code</label>
                            <input type="text" id="input" placeholder="E2 4XF" className="input-element"/>
                        </div>
                    </div>
                    <div className="personal-information-field">
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">Address</label>
                            <input type="text" id="input" placeholder="123 Example" className="input-element"/>
                        </div>
                    </div>
                    <div className="personal-information-field double">
                        <div className="input-field checked">
                            <label htmlFor="input" className="input-label">Email</label>
                            <input type="text" id="input" value="petter@gmail.com" className="input-element"/>
                            <img src={checked} alt="checked"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">Phone</label>
                            <input type="text" id="input" placeholder="+442223334444" className="input-element"/>
                        </div>
                    </div>
                    <div className="personal-information-field double">
                        <div className="input-field">
                            <label htmlFor="input" className="input-label">Password</label>
                            <input type="text" id="input" placeholder="Password" className="input-element"/>
                        </div>
                    </div>
                    <p>Use this email to log in to your <a href="https://resumedone.co/">resumedone.io</a> account and
                        receive notifications.</p>
                </div>
                <img src={avatar} alt="avatar" className="personal-information-avatar item-2"/>
            </div>
            <button className="personal-information-save">
                Save
            </button>
        </div>
    );
}

export default PersonalInformation;
