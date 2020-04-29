import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import menu from '../../constants/menu';
import Fade from '../../utils/Fade';
import './Nav.css';

const MenuItems = ({ onClick }) => menu.map(({ name, path }, i) => (
    <li key={`menu-item-${i}`}>
        <Fade>
            <Link exact activeClassName="active" onClick={onClick} to={path}>
                {name}
            </Link>
        </Fade>
    </li>
))

const DesktopNav = () => (
        <ul className="desktop-menu">
            <MenuItems />
            <li className="social-media">
                <Fade>
                    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="/"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                </Fade>
            </li>
        </ul>
);

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="mobile-button-lines" onClick={() => setMenuOpen(!menuOpen)}>
                <div style={{ transform: menuOpen ? 'rotate(45deg)' : 'none' }} />
                <div style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'translateX(-16px)' : 'none' }} />
                <div style={{ transform: menuOpen ? 'translateX(-1px) rotate(-45deg)' : 'none' }} />
            </div>
            {menuOpen &&
                <ul className="mobile-menu" style={{ height: menuOpen ? '100%' : 0 }}>
                    <MenuItems onClick={() => setMenuOpen(false)} />
                </ul>
            }
        </React.Fragment>
    )
};

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 56.6em)' });
    return isSmallScreen ? <MobileNav /> : <DesktopNav />
}

export default Nav;