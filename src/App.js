import './styles/css/app.css';
import Main from "./components/Content/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className="app-container">
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default App;
