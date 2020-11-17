import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Fade from '../../../utils/Fade';
import './Nav.css';

const menu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Therapies',
        path: '/therapies'
    },
    {
        name: 'Contact',
        path: '/contact'
    }

];

const MenuItems = ({ onClick }) => menu.map(({ name, path }, i) => (
    <li key={`menu-item-${i}`}>
        <Fade>
            <Link exact activeClassName="active" onClick={onClick} to={path}>
                {name}
            </Link>
        </Fade>
    </li>
));

const DesktopNav = () => (
    <ul className="desktop-menu">
        <MenuItems />
    </ul>
);

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="mobile-button-lines" onClick={() => setMenuOpen(!menuOpen)}>
                <div style={{ transform: menuOpen ? 'rotate(45deg)' : 'none' }} />
                <div style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'translateX(-16px)' : 'none' }} />
                <div style={{ transform: menuOpen ? 'translateX(-1px) rotate(-45deg)' : 'none' }} />
            </div>
            {menuOpen
                && (
                    <ul className="mobile-menu" style={{ height: menuOpen ? '100%' : 0 }}>
                        <MenuItems onClick={() => setMenuOpen(false)} />
                    </ul>
                )}
        </>
    );
};

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 50rem)' });

    return (
        <div className="nav-container">
            {isSmallScreen ? <MobileNav /> : <DesktopNav />}
        </div>
    );
};

export default Nav;
