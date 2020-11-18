import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Box, withStyles } from '@material-ui/core';
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

const StyledBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '10vh',
        zIndex: '2',
        position: 'relative'
    }
})(Box);

const StyledBoxDesktop = withStyles(({
    colors: {
        darkGray
    },
    fonts: {
        medium
    }
}) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '70vw',
        padding: '0',
        '& li': {
            listStyleType: 'none',
            padding: '0 0.8rem'
        },
        '& a': {
            textDecoration: 'none',
            fontSize: medium,
            color: darkGray
        }
    }
}))(Box);

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
    <StyledBoxDesktop component="ul">
        <MenuItems />
    </StyledBoxDesktop>
);

const StyledBoxHamburger = withStyles(({
    colors: {
        mediumGray
    }
}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        cursor: 'pointer',
        position: 'fixed',
        top: '2.3rem',
        left: '1.8rem',
        zIndex: '99',
        color: mediumGray,
        '& div': {
            height: '2px',
            width: '28px',
            background: mediumGray,
            transition: 'all 0.5s ease'
        },
        '& div:nth-child(1)': {
            transformOrigin: 'top left',
            marginBottom: '8px'
        },
        '& div:nth-child(3)': {
            transformOrigin: 'top left',
            marginTop: '8px'
        }
    }
}))(Box);

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <StyledBoxHamburger onClick={() => setMenuOpen(!menuOpen)}>
                <div style={{ transform: menuOpen ? 'rotate(45deg)' : 'none' }} />
                <div style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'translateX(-16px)' : 'none' }} />
                <div style={{ transform: menuOpen ? 'translateX(-1px) rotate(-45deg)' : 'none' }} />
            </StyledBoxHamburger>

            {menuOpen && (
                <Box component="ul" className="mobile-menu" style={{ height: menuOpen ? '100%' : 0 }}>
                    <MenuItems onClick={() => setMenuOpen(false)} />
                </Box>
            )}
        </>
    );
};

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 50rem)' });

    return (
        <StyledBox>
            {isSmallScreen ? <MobileNav /> : <DesktopNav />}
        </StyledBox>
    );
};

export default Nav;
