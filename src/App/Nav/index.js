import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import menu from '../../constants/menu';
import './Nav.css';

const DesktopNav = () => (
    <ul className="desktop-menu">
        {
            menu.map(({ name, path }, i) => (
                <li key={`menu-item-${i}`}>
                    <Link exact activeClassName="active" to={path}>{name}</Link>
                </li>
            ))
        }
        <li className="social-media">
            <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="/"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
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
            {
                menuOpen && <div className="mobile-menu" style={{ height: menuOpen ? '100%' : 0 }}>
                    {menu.map(({ name, path }, i) => (
                        <div key={`menu-item-${i}`}><div styles={{ animationDelay: `${i / 10}s` }}>
                            <Link exact activeClassName="active" onClick={() => setMenuOpen(false)} to={path}>
                                {name}
                            </Link>
                        </div></div>
                    ))}
                </div>
            }
        </React.Fragment>
    )
};

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 56.6em)' });
    return isSmallScreen ? <MobileNav /> : <DesktopNav />
}

export default Nav;