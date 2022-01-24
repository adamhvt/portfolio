import React from "react";
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="site-center">
                    <div className="contact">
                        <span style={{ fontSize: "large" }}>@</span>
                        <a href="mailto:adam.horvath.0827@gmail.com">adam.horvath.0827@gmail.com</a>
                    </div>
                </div>
            </footer>
            <div className="footer-spacer"></div>
        </>
    );
}

export default Footer;