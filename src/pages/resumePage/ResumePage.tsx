import ContactInfo from "./contactInfo/ContactInfo";
import Education from "./education/Education";
import "./resumePage.scss";
import SkillList from "./skillLIst/SkillList";
import WorkExperience from "./workExperience/WorkExperience";

const ResumePage = () => {
    return (
        <div className="resume">
            <div className="resume_head">
                <div className="imgContainer">
                    <img
                        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                        alt=""
                    />
                </div>
                <div className="name_position">
                    <div className="personName">
                        <h2>Thomas</h2>
                        <h2>Mumladze</h2>
                    </div>
                    <div className="position">
                        <h3>Front-End Developer</h3>
                    </div>
                </div>
            </div>
            <div className="resume_Body">
                <div className="leftWrapper">
                    <div className="contact">
                        <div className="title">
                            <h1>contact</h1>
                        </div>
                        <ContactInfo
                            contentSVG={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-phone"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            }
                            contetText="+995 599 59 59 59"
                        />

                        <ContactInfo
                            contentSVG={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-envelope"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            }
                            contetText="user1234@gmail.com"
                        />

                        <ContactInfo
                            contentSVG={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-house"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg>
                            }
                            contetText="Tbilisi , Georgia"
                        />
                    </div>
                    <div className="skils">
                        <div className="title">
                            <h1>skills</h1>
                        </div>
                        <SkillList
                            skillName="HTML5"
                            experinceLVL="95%"
                            className="html5_lvl"
                        />
                        <SkillList
                            skillName="CSS"
                            experinceLVL="90%"
                            className="css3_lvl"
                        />
                        <SkillList
                            skillName="js"
                            experinceLVL="70%"
                            className="js_lvl"
                        />
                        <SkillList
                            skillName="react.js"
                            experinceLVL="60%"
                            className="react_lvl"
                        />
                        <SkillList
                            skillName="python"
                            experinceLVL="40%"
                            className="python_lvl"
                        />
                        <SkillList
                            skillName="django"
                            experinceLVL="10%"
                            className="django_lvl"
                        />
                    </div>
                </div>
                <div className="rightWrapper">
                    <div className="work-experience">
                        <div className="title">
                            <h1>work experience</h1>
                        </div>
                        <WorkExperience />
                    </div>
                    <div className="education-collage-university">
                        <div className="title">
                            <h1>education</h1>
                        </div>
                        <Education
                            startTime="2022 jan"
                            endTime="2022 sept"
                            education="front end developer"
                            educationalnstitutionName="it step academy"
                            description="learning front end developer"
                        />
                        <Education
                            startTime="2018 sept"
                            endTime="current"
                            education=" information systems technology"
                            educationalnstitutionName="georgian technical university "
                            description="Bachelor"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
