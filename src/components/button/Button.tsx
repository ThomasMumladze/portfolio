import "./button.scss";

// ========== Link ========== //
import { Link } from "react-router-dom";

// ========== Interface ========== //
interface Props {
    linkTo: string;
    content: any;
}
const Button = (props: Props) => {
    const { content, linkTo } = props;
    return (
        <Link to={linkTo}>
            <button className="linkButton">{content}</button>
        </Link>
    );
};

export default Button;
