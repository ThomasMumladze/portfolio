import "./navigation.scss";
import { Link } from "react-router-dom";

// ========== Interfaces ========== //
interface Props {
    menuClassName: string;
    menuLink_1: string;
    menuLink_2: string;
    menuLink_3: string;
}
const Navigation = (props: Props) => {
    const { menuClassName, menuLink_1, menuLink_2, menuLink_3 } = props;
    return (
        <div className="navigation">
            <nav>
                <ul className={menuClassName}>
                    <li>
                        <Link to={"/"}>{menuLink_1}</Link>
                    </li>
                    <li>
                        <Link to={"/resume"}>{menuLink_2}</Link>
                    </li>
                    <li>
                        <Link to={"/project"}>{menuLink_3}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
