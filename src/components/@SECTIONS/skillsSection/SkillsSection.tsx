import "./skillsSection.scss";
// ========== COMPONENTS ========== //
import SkillContainer from "../../skillContainer/SkillContainer";

// ========== HOOKS ========== //

const SkillsSection = () => {
    return (
        <section id="SkillsSection">
            <div className="skillsSection_body">
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

export default SkillsSection;
