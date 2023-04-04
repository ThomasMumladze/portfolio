import "./App.css";
import PortfolioApp from "./components/PortfolioApp";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
function App() {
    return (
        <div className="App">
            <header id="header">
                <div className="header_body">
                    <div className="TITLE">
                        <h1>Front End Developer</h1>
                    </div>
                    <Navigation />
                </div>
            </header>
            <Routes>
                <Route path="/" element={<PortfolioApp />} />
            </Routes>
        </div>
    );
}

export default App;
