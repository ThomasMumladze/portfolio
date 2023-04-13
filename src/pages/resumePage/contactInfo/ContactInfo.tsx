import "./contactInfo.scss";
import { Props } from "./interfaces";
const ContactInfo = (props: Props) => {
    return (
        <div className="contactInfo-Wrapper">
            {props.contentSVG}
            <p>{props.contetText}</p>
        </div>
    );
};

export default ContactInfo;
