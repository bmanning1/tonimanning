import React from 'react';
import { NavLink, Route, Redirect, Switch, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import Therapies from '../Pages/Therapies';
import Pricing from '../Pages/Pricing';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Nav from './Nav';
import Fade from '../utils/Fade';
import './App.css';
import { ScrollToOnMount } from '../utils/ScrollTo';

//TODO: Sort the jaggery image loading
//TODO: Mobile compatible
//TODO: Add Hover stuff

const App = () => {
    const location = useLocation();

    return (
        <div className="toni-manning">
            <div className="header">
                <img className="logo" alt="logo" src="" />
                <Nav/>
            </div>
            <Fade onChange={location.key}>
                <Switch className="content" location={location}>
                    <Route path="/therapies"><Therapies/></Route>
                    <Route exact path="/pricing"><Pricing/></Route>
                    <Route exact path="/blog"><Blog/></Route>
                    <Route exact path="/contact"><Contact/></Route>
                    <Route exact path="/privacy"><h4>privacy</h4></Route>
                    <Route exact path="/faq"><h4>faq</h4></Route>
                    <Route exact path="/qualifications"><h4>qualifications</h4></Route>
                    <Route exact path="/about"><ScrollToOnMount /><Home/></Route>
                    <Route exact path="/"><Home/></Route>
                    <Route path="*"><Redirect to="/" /></Route>
                </Switch>
            </Fade>
            <ul className="footer">
                <li><NavLink exact to="/privacy">Privacy</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/qualifications">Qualifications</NavLink></li>
            </ul>
        </div>
    );
};

export default App;
