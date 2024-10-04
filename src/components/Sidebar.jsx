
import "../styles/css/sidebar.css";
import Nav from "./Sidebar/Nav";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarFooter from "./Sidebar/SidebarFooter";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <SidebarHeader/>
            <Nav/>
            <SidebarFooter/>
        </div>
    )
}

export default Sidebar