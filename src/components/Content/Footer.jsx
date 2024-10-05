import React from "react";
import "../../styles/css/footer.css";

const Footer = () => {
    return (
        <div className="footer main-item">
            <div className="footer-content">
                <p><a href="#">Get in touch with our support team</a> if you have any question or want to leave some feedback.</p>
                <p>We’ll be happy to hear from you.</p>
            </div>
            <div className="separator"></div>
            <div className="links">
                <button className="link info fw-regular">Terms & Conditions</button>
                <button className="link info fw-regular">Privacy Policy</button>
                <button className="link info fw-regular">FAQ</button>
                <button className="link info fw-regular">Contact Us</button>
            </div>
        </div>
    );
}

export default Footer;