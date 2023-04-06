import "./resumePage.scss";
import { Link } from "react-router-dom";
const ResumePage = () => {
    return (
        <div className="resume">
            Go Back <Link to={"/"}>Resume/CV</Link> Not Read
        </div>
    );
};

export default ResumePage;
