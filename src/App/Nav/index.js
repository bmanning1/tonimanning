import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import menu from '../../constants/menu';
import './Nav.css';

const MenuLink = (props) => props.to.includes('#')
    ? <Link {...props}>{props.children}</Link>
    : <NavLink exact activeClassName="active" {...props}>{props.children}</NavLink>;

const DesktopNav = () => (
    <ul className="desktop-menu">
        {menu.map(({ name, path }, i) => (
            <li key={`menu-item-${i}`}>
                <MenuLink to={path}>
                    {name}
                </MenuLink>
            </li>
        ))}
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
            {menuOpen
                ? <div className="mobile-menu" style={{ height: menuOpen ? '100%' : 0 }}>
                    {menu.map(({ name, path }, i) => (
                        <div key={`menu-item-${i}`}><div styles={{ animationDelay: `${i / 10}s` }}>
                            <MenuLink onClick={() => setMenuOpen(false)} to={path}>
                                {name}
                            </MenuLink>
                        </div></div>
                    ))}
                </div>
                : null
            }
        </React.Fragment>
    )
};

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 56.6em)' });
    return isSmallScreen ? <MobileNav /> : <DesktopNav />
}

export default Nav;