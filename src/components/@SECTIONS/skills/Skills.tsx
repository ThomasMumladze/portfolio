import "./skills.scss";
// ========== IMAGE ========== //
import programmingIcon from "../../../assets/icon/top10lan.jpg";
import SkillContainer from "../../skillContainer/SkillContainer";

// ========== HOOKS ========== //

const Skills = () => {
    return (
        <section id="Skills">
            <div className="skill_body">
                <div className="skillTitle">
                    <h1>Skill</h1>
                    <div className="skill_Line"></div>
                </div>
                <div className="skillList">
                    <SkillContainer />
                    <SkillContainer />
                    <SkillContainer />
                    <SkillContainer />
                    <SkillContainer />
                    <SkillContainer />
                </div>
            </div>
        </section>
    );
};

export default Skills;
