import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Home from '../Pages/Home';
import Therapies from '../Pages/Therapies';
import Pricing from '../Pages/Pricing';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Nav from './Nav';
import './App.css';

const App = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 56.6em)' });

const App = () => (
    <div className="toni-manning">
        <div className="header">
            <img className="logo" alt="logo" src="" />
            <Nav/>
        </div>
        <div className="content">
            <Route exact path="/" render={() => <Fade><Home/></Fade>}/>
            <Route exact path="/therapies" render={() => <Fade><Therapies/></Fade>}/>
                <Route path="/therapies" render={() => <Fade><Therapies/></Fade>}/>
            <Route path="/pricing" render={() => <Fade><Pricing/></Fade>}/>
            <Route path="/blog" render={() => <Fade><Blog/></Fade>}/>
            <Route path="/contact" render={() => <Fade><Contact/></Fade>}/>
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

export default App;
