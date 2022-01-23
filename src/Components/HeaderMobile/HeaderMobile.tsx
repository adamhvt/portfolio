import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './HeaderMobile.scss';

function HeaderMobile() {
    return (
        <div className="header-mobile">
            <nav>
                <ul>
                    <li><Link to="/">Introduction</Link></li>
                    <li><Link to="/cv">CV</Link></li>
                    <li><Contact /></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMobile;