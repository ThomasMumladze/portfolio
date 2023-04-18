import "./heroSection.scss";

// ========== COMPONENTS ========== //
import Button from "../../button/Button";

// ========== API ========== //
import { getGitHubUser } from "../../../api/gitHub";

// ========== HOOKS ========== //
import { useState, useEffect, useRef } from "react";
const HeroSection = () => {
    const ref = useRef(true);
    const [userImage, setUserImage] = useState<any>("");
    useEffect(() => {
        try {
            if (ref.current) {
                getGitHubUser
                    .get("/ThomasMumladze")
                    .then((res) => setUserImage(res.data));
                ref.current = false;
            }
        } catch (error) {
            throw new Error();
        }
    }, []);
    return (
        <section id="heroSection">
            <div className="heroSection_body">
                <div className="about">
                    <h1>i'm Thomas mumladze</h1>
                    <p className="about_Description">
                        Front-End Developer. creating the web application which
                        is customized for User. and also use python to store and
                        organize data.
                    </p>
                    <Button
                        content={
                            <>
                                <p>contact me</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </>
                        }
                        linkTo={"/about"}
                    />
                </div>
                <div className="image">
                    <div className="imageContainer">
                        <img src={userImage.avatar_url} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
