import React from 'react';
import About from '../About';
import homeBackground from '../../static/HomePage/Background.jpg'
import './Home.css';

const Home = () => (
    <div className="home-page">
        <div className="home">
            <img className="home-img" alt="massage" src={homeBackground} />
            <a className="arrow" href="#about"><div/></a>
        </div>
        <div id="about">
            <About />
        </div>
    </div>
);

export default Home;