import "./navigation.scss";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>home</Link>
                    </li>
                    <li>
                        <Link to={"/resume"}>resume</Link>
                    </li>
                    <li>
                        <Link to={"/project"}>project</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
