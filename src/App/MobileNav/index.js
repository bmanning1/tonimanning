import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './MobileNav.css';

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <React.Fragment>
            <div className="mobile-button-lines" onClick={() => setMenuOpen(!menuOpen)}>
                <div style={{ transform: menuOpen ? 'rotate(45deg)':'none' }}/>
                <div style={{ opacity: menuOpen ? 0: 1, transform: menuOpen ? 'translateX(-16px)':'none' }}/>
                <div style={{ transform: menuOpen ? 'translateX(-1px) rotate(-45deg)':'none' }}/>
            </div>
            {menuOpen
                ? <div className="mobile-menu" style={{ height: menuOpen ? '100%': 0 }}>
                    <div><div styles={{ animationDelay: '0.1s' }}>
                        <NavLink activeClassName="active" onClick={() => setMenuOpen(false)} exact to="/">Home</NavLink>
                    </div></div>
                    <div><div styles={{ animationDelay: '0.2s' }}>
                        <Link styles={{ animationDelay: '0.2s' }} onClick={() => setMenuOpen(false)} to="/#about">About</Link>
                    </div></div>
                    <div><div styles={{ animationDelay: '0.3s' }}>
                        <NavLink activeClassName="active" styles={{ animationDelay: '0.3s' }} onClick={() => setMenuOpen(false)} to="/therapies">Therapies</NavLink>
                    </div></div>
                    <div><div styles={{ animationDelay: '0.4s' }}>
                        <NavLink activeClassName="active" styles={{ animationDelay: '0.4s' }} onClick={() => setMenuOpen(false)} to="/pricing">Pricing</NavLink>
                    </div></div>
                    <div><div styles={{ animationDelay: '0.5s' }}>
                        <NavLink activeClassName="active" styles={{ animationDelay: '0.5s' }} onClick={() => setMenuOpen(false)} to="/blog">Blog</NavLink>
                    </div></div>
                    <div><div styles={{ animationDelay: '0.6s' }}>
                        <NavLink activeClassName="active" styles={{ animationDelay: '0.6s' }} onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
                    </div></div>
                </div>
                : null
            }
        </React.Fragment>
    )
};

export default MobileNav;