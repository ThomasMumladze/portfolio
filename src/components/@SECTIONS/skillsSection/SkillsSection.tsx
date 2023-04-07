import "./skillsSection.scss";
// ========== HOOKS ========== //
import { useState } from "react";

// ========== COMPONENTS ========== //
import SkillContainer from "../../skillContainer/SkillContainer";

// ========== SKILL DATA ========== //
import skillsData from "../../../@data/skillData.json";

const SkillsSection = () => {
    return (
        <section id="SkillsSection">
            <div className="skillsSection_body">
                <div className="skillTitle">
                    <h1>Skill</h1>
                    <div className="skill_Line"></div>
                </div>
                <div className="skillList">
                    {skillsData.map((item) => (
                        <SkillContainer
                            key={item.id}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
