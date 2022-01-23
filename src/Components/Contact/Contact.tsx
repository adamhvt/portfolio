import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

function Contact() {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = 'mailto:adam.horvath.0827@gmail.com';
                e.preventDefault();
            }}
        >
            Contact
        </Link>
    );
}

export default Contact;