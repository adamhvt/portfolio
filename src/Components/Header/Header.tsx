import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './Header.scss';


function Header() {
    return (
        <header>
            <div className="site-center header-container">
                <div className="header-left">
                    <h3>Adam Horvath</h3>
                </div>
                <div className="header-center">
                    <nav>
                        <ul>
                            <li><Link to="/">Introduction</Link></li>
                            <li><Link to="/cv">CV</Link></li>
                            <li><Contact /></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <ul>
                        <li>
                            <a href="https://github.com/niceberg" target="_blank" rel="noreferrer" className="link-social"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/niceberg/" target="_blank" rel="noreferrer" className="link-social"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                        </li>
                        <li>
                            <a href="https://medium.com/@adam.horvath.0827" target="_blank" rel="noreferrer" className="link-social"><FontAwesomeIcon icon={faMediumM} size="lg" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;