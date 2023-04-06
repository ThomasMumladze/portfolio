import "./PortfolioApp.scss";
import React from "react";

// ========== COMPONENTS ========== //
import Button from "../../components/button/Button";
import ProjectCard from "../../components/projectCard/ProjectCard";
// ========== SECTIONS
import Skills from "../../components/@SECTIONS/skills/Skills";
import PersonSection from "../../components/@SECTIONS/personSection/Person";

// ========== LINKS ========== //
import { Link } from "react-router-dom";

// ========== HOOKS ========== //
import { useState } from "react";

// TEST IMAGE
import image01 from "../../assets/images/1.png";
import image02 from "../../assets/images/213123.png";
import ProjectSection from "../../components/@SECTIONS/projectSection/ProjectSection";
const PortfolioApp = () => {
    // TEST STATE
    const [project, setProject] = useState([
        {
            id: 0,
            liveServer: true,
            codeSource: true,
            projectImage: image01,
            projectLink: "https://github-usersearch-app.netlify.app/",
            projectSourceLink:
                "https://github.com/ThomasMumladze/GitHub-UserSearch-Application",
            projectTechnologies: "React.js",
            projectTitle: "GIT Hub User Search",
            projectAbout: "Searching gitHub User By User Names",
        },
        {
            id: 1,
            liveServer: false,
            codeSource: true,
            projectImage: image02,
            projectLink: "",
            projectSourceLink:
                "https://github.com/ThomasMumladze/Python-Basic-Proejcts",
            projectTechnologies: "Python",
            projectTitle: "Python Basic Project",
            projectAbout: "completed basic project on python",
        },
    ]);
    // ----------------------------------------------------------------------------- //
    return (
        <div className="portfolioApp">
            <PersonSection />
            <ProjectSection />
            {/* ========== SKILLS SECTION ========== */}
            <Skills />
        </div>
    );
};

export default PortfolioApp;
