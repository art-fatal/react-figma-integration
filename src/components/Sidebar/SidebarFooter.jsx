import React from 'react';
import "../../styles/css/sidebar-footer.css";
import gear from "../../img/gear.svg";
import avatar from "../../img/avatar.png";

const SidebarFooter = () => {
    return (
        <div className="sidebar__footer">
            <div className="sidebar__footer__item__left">
                <img src={avatar} alt="avatar" className="account__avatar"/>
                <div className="account__name">
                    <span>Carla</span>
                </div>

            </div>
            <div className="sidebar__footer__item__right">
                <button className="sidebar__footer__item__right__button">
                    <img src={gear} alt="gear"/>
                </button>
            </div>
        </div>
    );
}

export default SidebarFooter;