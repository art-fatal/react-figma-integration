import "../../styles/css/sidebar.css";
import Nav from "./Nav";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import logo from "../../img/logo.svg";

const Sidebar = ({toggleSidebar}) => {

    return (
        <>
            <button className="humberger-menu" onClick={toggleSidebar}>
                <img src={logo} alt="logo"/>
            </button>
            <div className="sidebar">
                <SidebarHeader toggleSidebar={toggleSidebar}/>
                <Nav/>
                <SidebarFooter/>
            </div>
        </>
    )
}

export default Sidebar