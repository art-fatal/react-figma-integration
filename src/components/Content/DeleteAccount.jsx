import React from "react";
import "../../styles/css/delete-account.css";

const DeleteAccount = () => {
    return (
        <div className="main-item delete-account-container">
            <div className="delete-account-checkbox">
            <input type="checkbox" id="delete-account-checkbox"/>
            <label htmlFor="delete-account-checkbox" className="delete-account-checkbox-label">
                <span className="delete-account-checkbox-label-text">Show my profile to serious employers on <a href="#">hirethesbest.io</a> for free</span>
            </label>
            </div>
            <div className="delete-account">
                <div className="gap-2 flex flex-col">
                    <h5 className="delete-account-title">Delete account</h5>
                    <p className="delete-account-content">
                        If you delete your account you’ll be permanently removing it from our systems - you can’t undo
                        it.
                    </p>
                </div>
                <button className="link danger text-start">
                    Yes, Delete my account
                </button>
            </div>
        </div>
    );
}

export default DeleteAccount;