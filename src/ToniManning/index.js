import React, { useState } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Home from '../Pages/Home';
import Therapies from '../Pages/Therapies';
import Pricing from '../Pages/Pricing';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import './ToniManning.css';

// const menu = [
//     {
//         label: 'Home',
//         path: '/'
//     },
//     {
//         label: 'About',
//         path: '/#about'
//     },
//     {
//         label: 'Therapires',
//         path: '/therapies'
//     },
//     {
//         label: 'Pricing',
//         path: '/pricing'
//     },
//     {
//         label: 'Blog',
//         path: '/blog'
//     },
//     {
//         label: 'Contact',
//         path: '/contact'
//     }
// ];

const styles = (menuOpen) => ({
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: menuOpen ? '100%': 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
    },
    menuList: {
        paddingTop: '3rem',
    },
    lineTop: {
        transform: menuOpen ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
    },
    lineMiddle: {
        opacity: menuOpen ? 0: 1,
        transform: menuOpen ? 'translateX(-16px)':'none',
    },
    lineBottom: {
        transform: menuOpen ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
    }
});

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div>
            <div className="menu-button">
                <div className="menu-button-container" onClick={() => setMenuOpen(!menuOpen)}>
                    <div style={styles(menuOpen).lineTop}/>
                    <div style={styles(menuOpen).lineMiddle}/>
                    <div style={styles(menuOpen).lineBottom}/>
                </div>
            </div>
            <div style={styles(menuOpen).container}>
                {menuOpen
                    ? <div style={styles(menuOpen).menuList}>
                        <div className="menu-item-container" styles={{ animationDelay: '0.1s' }}>
                            <NavLink styles={{ animationDelay: '0.1s' }} onClick={() => setMenuOpen(false)} exact to="/">Home</NavLink>
                        </div>
                        <div className="menu-item-container" styles={{ animationDelay: '0.2s' }}>
                            <Link styles={{ animationDelay: '0.2s' }} onClick={() => setMenuOpen(false)} to="/#about">About</Link>
                        </div>
                        <div className="menu-item-container" styles={{ animationDelay: '0.3s' }}>
                            <NavLink styles={{ animationDelay: '0.3s' }} onClick={() => setMenuOpen(false)} to="/therapies">Therapies</NavLink>
                        </div>
                        <div className="menu-item-container" styles={{ animationDelay: '0.4s' }}>
                            <NavLink styles={{ animationDelay: '0.4s' }} onClick={() => setMenuOpen(false)} to="/pricing">Pricing</NavLink>
                        </div>
                        <div className="menu-item-container" styles={{ animationDelay: '0.5s' }}>
                            <NavLink styles={{ animationDelay: '0.5s' }} onClick={() => setMenuOpen(false)} to="/blog">Blog</NavLink>
                        </div>
                        <div className="menu-item-container" styles={{ animationDelay: '0.6s' }}>
                            <NavLink styles={{ animationDelay: '0.6s' }} onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
};
// const MobileNav = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return(
//         <div>
//             <div className="menu-button">
//                 <div className="menu-button-container" onClick={() => setMenuOpen(!menuOpen)}>
//                     <div style={styles(menuOpen).lineTop}/>
//                     <div style={styles(menuOpen).lineMiddle}/>
//                     <div style={styles(menuOpen).lineBottom}/>
//                 </div>
//             </div>
//             <div style={styles(menuOpen).container}>
//                 {menuOpen
//                     ? <div style={styles(menuOpen).menuList}>
//                         {menu.map((page,i) => (
//                             <div
//                                 key={i}
//                                 className="menu-item-container"
//                                 styles={{ animationDelay: `${i * 0.1}s` }}
//                             >
//                                 {page.path.includes('#') ? <Link
//                                     className="menu-item"
//                                     styles={{ animationDelay: `${i * 0.1}s` }}
//                                     onClick={() => setMenuOpen(false)}
//                                     to={page.path}
//                                 >
//                                     {page.label}
//                                 </Link>
//                                 : <NavLink
//                                     className="menu-item"
//                                     styles={{ animationDelay: `${i * 0.1}s` }}
//                                     onClick={() => setMenuOpen(false)}
//                                     to={page.path}
//                                 >
//                                     {page.label}
//                                 </NavLink>}
//                                 <br/>
//                                 <br/>
//                             </div>
//                         ))}
//                     </div>
//                     : null
//                 }
//             </div>
//         </div>
//     )
// };



const ToniManning = () => {
  return (
    <div className="toni-manning">
        <div className="header">
            <MobileNav />
            <img className="logo" alt="logo" src="https://via.placeholder.com/400x100/E2D4C6/808080?text=TONI%20MANNING" />
            <ul className="nav-bar">
                <li><NavLink exact to="/">Home</NavLink></li>
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
        </div>
        <div className="content">
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/therapies" render={() => <Therapies/>}/>
            <Route path="/pricing" render={() => <Pricing/>}/>
            <Route path="/blog" render={() => <Blog/>}/>
            <Route path="/contact" render={() => <Contact/>}/>
            <Route path="/privacy" render={() => <h4>privacy</h4>}/>
            <Route path="/faq" render={() => <h4>faq</h4>}/>
            <Route path="/qualifications" render={() => <h4>qualifications</h4>}/>
            <Route render={() => <Redirect to="/" />} />
        </div>
        <div className="footer">
            <ul>
                <li><NavLink exact to="/privacy">Privacy</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/qualifications">Qualifications</NavLink></li>
            </ul>
        </div>
    </div>
  );
}

export default ToniManning;
