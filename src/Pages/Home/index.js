import React from 'react';
import About from '../About';
import './Home.css';

const Home = () => (
    <div className="home-page">
        <div className="home">
            <img className="home-img" alt="massage" src="https://via.placeholder.com/400/E2D4C6/808080?text=home%20page%20image" />
            <a className="arrow" href="#about"><div/></a>
        </div>
        <div id="about">
            <About />
        </div>
    </div>
);

export default Home;