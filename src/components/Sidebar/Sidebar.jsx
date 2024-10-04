
import "../../styles/css/sidebar.css";
import Nav from "./Nav";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

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