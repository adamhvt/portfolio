import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="site-center">
                    <div className="contact">
                        <FontAwesomeIcon icon={faAt} size="lg" />
                        <a href="mailto:adam.horvath.0827@gmail.com">adam.horvath.0827@gmail.com</a>
                    </div>
                </div>
            </footer>
            <div className="footer-spacer"></div>
        </>
    );
}

export default Footer;