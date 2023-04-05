import "./PortfolioApp.scss";
import React from "react";
// ========== COMPONENTS ========== //
import Button from "../../components/button/Button";
import ProjectCard from "../../components/projectCard/ProjectCard";

// ========== LINKS ========== //
import { Link } from "react-router-dom";

// ========== HOOKS ========== //
import { useState } from "react";

// TEST IMAGE
import image01 from "../../assets/images/1.png";
import image02 from "../../assets/images/213123.png";
import Skills from "../../components/@SECTIONS/skills/Skills";
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
            <section id="project">
                <div className="projectTitle">
                    <div className="container">
                        <h1>Project</h1>
                        <div className="projectLine"></div>
                    </div>
                    <Link to={"/project"}>
                        {" "}
                        view all
                        <Button
                            buttonClassName="viewAll"
                            content={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-in-up-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                                    />
                                </svg>
                            }
                            clickEvent={() => console.log(1)}
                        />
                    </Link>
                </div>
                <div className="projectWrapper">
                    {project.map((card) => (
                        <ProjectCard
                            key={card.id}
                            liveServer={card.liveServer}
                            codeSource={card.codeSource}
                            projectImage={card.projectImage}
                            projectLink={card.projectLink}
                            projectSourceLink={card.projectSourceLink}
                            projectTechnologies={card.projectTechnologies}
                            projectTitle={card.projectTitle}
                            projectAbout={card.projectAbout}
                        />
                    ))}
                </div>
            </section>

            {/* ========== SKILLS SECTION ========== */}
            <Skills />
        </div>
    );
};

export default PortfolioApp;
