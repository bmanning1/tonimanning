import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import './ToniManning.css';

const ToniManning = () => {
  return (
    <div className="App">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/contact" render={() => <Contact/>}/>
        <Route render={() => <Redirect to="/" />} />
    </div>
  );
}

export default ToniManning;
