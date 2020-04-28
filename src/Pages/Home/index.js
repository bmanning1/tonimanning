import React from 'react';
import About from '../About';
import homeBackground from '../../static/HomePage/Background.jpg';
import { scrollTo, aboutHeight } from '../../utils/ScrollTo';
import './Home.css';

const Home = () => (
    <div className="home-page">
        <div className="home">
            <img className="home-img" alt="massage" src={homeBackground} />
            <button className="arrow" onClick={() => scrollTo(aboutHeight)}><div /></button>
        </div>
        <About />
    </div>
);

export default Home;