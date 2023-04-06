import "./Person.scss";
const PersonSection = () => {
    return (
        <section id="person">
            <div className="personSection_body">
                <div className="about">
                    <h1>Thomas Mumladze</h1>
                    <div className="about">I'm Front-End Developer</div>
                </div>
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <img
                            src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
                            alt=""
                        />
                    </div>
                    <div className="workTime">
                        <div></div>
                        <p>
                            currently Working on <span>UserManagement</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PersonSection;
