import "./button.scss";

// ========== Link ========== //
import { Link } from "react-router-dom";

// ========== Interface ========== //
interface Props {
    linkTo: string;
    content: any;
    target: string;
}
const Button = (props: Props) => {
    const { content, linkTo, target } = props;
    return (
        <Link to={linkTo} target={target}>
            <button className="linkButton">{content}</button>
        </Link>
    );
};

export default Button;
