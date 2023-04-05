import "./PortfolioApp.scss";
// ========== COMPONENTS ========== //
import Button from "../../components/button/Button";
import ProjectCard from "../../components/projectCard/ProjectCard";

// ========== LINKS ========== //
import { Link } from "react-router-dom";

const PortfolioApp = () => {
    return (
        <div className="portfolioApp">
            <section id="project">
                <div className="projectTitle">
                    <div className="container">
                        <h1>Project</h1>
                        <div className="projectLine"></div>
                    </div>
                    <Button
                        buttonClassName="viewAll"
                        content={
                            <>
                                <Link to={"/project"}>view all</Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-in-up-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                                    />
                                </svg>
                            </>
                        }
                        clickEvent={() => console.log(1)}
                    />
                </div>
                <div className="projectWrapper">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </section>
        </div>
    );
};

export default PortfolioApp;
