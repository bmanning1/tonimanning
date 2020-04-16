import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './DesktopNav.css';

const DesktopNav = () => (
    <ul className="desktop-menu">
        <li><NavLink exact to="/">Home</NavLink></li>
        {/* <li><div styles={{ animationDelay: '0.1s' }}><NavLink exact to="/">Home</NavLink></div></li> */}
        <li><Link to="/#about">About</Link></li>
        <li><NavLink to="/therapies">Therapies</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li className="social-media">
            <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="/"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
    </ul>
);

export default DesktopNav;