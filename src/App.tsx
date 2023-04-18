import "./App.scss";
import "./AppDarkMode.scss";

// ========== CUSTOM HOOKS ========== //
import useDarkMode from "./hooks/useDarkMode";
import { useScroll } from "./hooks/useScroll";

// ========== Components ========== //
import Root from "./pages/@root/Root";
import PortfolioApp from "./pages/homePage/PortfolioApp";
import ResumePage from "./pages/resumePage/ResumePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import AboutPage from "./pages/aboutPage/AboutPage";

// ========== ROUTE ========== //
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<PortfolioApp />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);

// ========== CONTEXT ========== //
import { createContext, useState } from "react";
export const appContext = createContext<any>(null);

function App() {
    const { isDarkMode, handleDarkMode } = useDarkMode();
    const { scroll } = useScroll();

    return (
        <div className={isDarkMode ? "darkMode_App" : "App"}>
            <appContext.Provider
                value={{
                    isDarkMode,
                    scroll,
                    handleDarkMode,
                }}
            >
                <RouterProvider router={routes} />
            </appContext.Provider>
        </div>
    );
}

export default App;
