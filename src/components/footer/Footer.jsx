import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    I made this web application to strengthen my knowledge on react, API handling, redux toolkit and to explore 
                    advanced css styling effects and best industry react practices. 
                </div>
                <div className="socialIcons">
                    <span className="icon" >
                      <FaFacebookF />
                    </span>
                    <span className="icon">
                      <FaInstagram />
                    </span>
                    <span className="icon">
                      <FaTwitter />
                    </span>
                    <span className="icon">
                      <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;