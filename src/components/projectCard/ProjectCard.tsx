import "./projectCard.scss";

// ========== COMPONENTS ========== //
import Button from "../button/Button";

// ========== INTERFACES ========== //
interface Props {
    technologies: string | null;
    title: string | null;
    imgUrl: string;
    description: string | null;
    LiveServerLink: string | null;
    codeSourceLink: string | null;
}
const ProjectCard = (props: Props) => {
    return (
        <div className="projectCard">
            <div className="projectImageWrap">
                <img src={props.imgUrl} alt="..." />
            </div>
            <div className="project_technologies">
                <span> {props.technologies} </span>
            </div>
            <div className="project_Description">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="project_Link">
                {props.LiveServerLink !== null ? (
                    <Button
                        linkTo={props.LiveServerLink}
                        target="_blank"
                        content={
                            <>
                                <p>live</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-link"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                </svg>
                            </>
                        }
                    />
                ) : null}
                {props.codeSourceLink !== null ? (
                    <Button
                        linkTo={props.codeSourceLink}
                        target="_blank"
                        content={
                            <>
                                <p>source</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-folder-symlink"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z" />
                                    <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                                </svg>
                            </>
                        }
                    />
                ) : null}
            </div>
        </div>
    );
};

export default ProjectCard;
