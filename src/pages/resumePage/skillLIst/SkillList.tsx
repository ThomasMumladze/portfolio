import "./skillList.scss";
import { Props } from "./interfaces";
const SkillList = (props: Props) => {
    return (
        <div className="skillList-Wrapper">
            <div className="skill-title">
                <p>{props.skillName}</p>
            </div>
            <div className="level-experience">
                <div className="indicator">
                    <div className={props.className}></div>
                </div>
                <p>{props.experinceLVL}</p>
            </div>
        </div>
    );
};
export default SkillList;
