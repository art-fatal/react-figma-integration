import './styles/css/app.css';
import Main from "./components/Content/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    const toggleSidebar = () => {
        document.querySelector(".sidebar").classList.toggle("sidebar--open");
        document.querySelector(".app-container").classList.toggle("sidebar--open");
    }

    return (
        <div className="app-container">
            <Sidebar toggleSidebar={toggleSidebar}/>
            <Main/>
            <div className="overlay" onClick={toggleSidebar}></div>
        </div>
    );
}

export default App;
