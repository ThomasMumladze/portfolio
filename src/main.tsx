import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// ========== COMPONENTS ========== //
import App from "./App"; // MAIN PAGE CONTAINS HEADER AND FOOTER
import PortfolioApp from "./pages/homePage/PortfolioApp"; // Default home page thats will render when page open
import ResumePage from "./pages/resumePage/ResumePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import AboutPage from "./pages/aboutPage/AboutPage";

// ========== REACT ROUTER ========== //
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

// ========== CREATE ROUTES ========== //
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<PortfolioApp />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
