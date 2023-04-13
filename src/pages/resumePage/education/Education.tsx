import "./education.scss";
import { Props } from "./interfaces";
const Education = (props: Props) => {
    return (
        <div className="education">
            <div className="University ">
                <h1>{props.education}</h1>
            </div>
            <div className="University-academy start-end_time">
                <p>{props.educationalnstitutionName}</p>
                <p>
                    <span className="startTIme">{props.startTime}</span> -{" "}
                    <span className="endTime">{props.endTime}</span>
                </p>
            </div>
            <div className="description">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bookmark-check-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                    />
                </svg>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Education;
