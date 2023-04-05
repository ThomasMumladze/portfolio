import "./skills.scss";
// ========== IMAGE ========== //
import programmingIcon from "../../../assets/icon/top10lan.jpg";
import SkillContainer from "../../skillContainer/SkillContainer";
const Skills = () => {
    return (
        <section id="Skills">
            <div className="skill_body">
                <div className="projectTitle">
                    <div className="container">
                        <h1>Skills</h1>
                        <div className="projectLine"></div>
                    </div>
                </div>

                {/* ========== SKill LIST ========== */}
                <div className="Skill_List">
                    <div className="skillIcon">
                        <img src={programmingIcon} alt="..." />
                    </div>
                    <div className="skills">
                        <SkillContainer />
                        <SkillContainer />
                        <SkillContainer />
                        <SkillContainer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
