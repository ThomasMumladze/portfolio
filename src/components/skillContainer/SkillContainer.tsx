import "./skillContainer.scss";
interface Props {
    title: string;
    content: string;
}
const SkillContainer = (props: Props) => {
    return (
        <div className="skillContainer">
            <div className="skills_title">
                <h2>{props.title}</h2>
            </div>
            <div className="skill_description">
                <span>{props.content}</span>
            </div>
        </div>
    );
};

export default SkillContainer;
