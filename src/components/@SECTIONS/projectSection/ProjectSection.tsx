import "./projectSection.scss";

// ========== HOOKS ========== //
import { useState } from "react";

// ========== COMPONENTS ========== //
import Button from "../../button/Button";
import ProjectCard from "../../projectCard/ProjectCard";

// ========== LINKS ========== //
import { Link } from "react-router-dom";

const ProjectSection = () => {
    return (
        <section id="projectSection">
            <div className="projectSection_body">
                <div className="projectTitle">
                    <div className="container">
                        <h1>Project</h1>
                        <div className="projectLine"></div>
                    </div>
                    {/* btn */}
                    <Button
                        linkTo="/project"
                        content={
                            <>
                                <p>view all</p>
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
                            </>
                        }
                    />
                </div>
                <div className="projectWrapper">
                    <div className="projectCard_List">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
