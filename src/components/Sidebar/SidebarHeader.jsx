import logo from "../../img/logo-lg.svg";
import "../../styles/css/sidebar-header.css";

const SidebarHeader = () => {
    return (
        <div className="sidebar__header">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default SidebarHeader