import "./button.scss";

// ========== Interface ========== //
interface Props {
    content: string;
    buttonClassName: string;
    clickEvent: () => void;
}
const Button = (props: Props) => {
    const { content, buttonClassName, clickEvent } = props;
    return (
        <button className={buttonClassName} onClick={clickEvent}>
            {content}
        </button>
    );
};

export default Button;
