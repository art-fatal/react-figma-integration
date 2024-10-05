import logo from "../../img/logo-lg.svg";
import "../../styles/css/sidebar-header.css";

const SidebarHeader = ({toggleSidebar}) => {
    return (
        <div className="sidebar__header" onClick={toggleSidebar}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default SidebarHeader