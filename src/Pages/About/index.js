import React from 'react';
import Toni from '../../static/AboutPage/Toni.jpg';
import BenchPortrait from '../../static/AboutPage/BenchPortrait.jpg';
import MassageRoom from '../../static/AboutPage/MassageRoom.jpg';
import OutdoorsTable from '../../static/AboutPage/OutdoorsTable.jpg';
import ViewLandscape from '../../static/AboutPage/ViewLandscape.jpg';
import './About.css';

const About = () => (
    <div className="about-page">
        <h1 className="about-title">About</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis quam molestie odio viverra tempus. Quisque lobortis euismod pellentesque. Duis facilisis, diam in tincidunt vehicula, enim ligula rutrum elit, id euismod lorem nisl vitae lacus. Aenean quis nunc erat. Nam nec metus et lectus ultricies tempor id in orci. Aenean luctus malesuada justo nec ultrices. Phasellus at leo nec purus auctor faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ac metus non enim imperdiet semper. Ut eu nunc placerat, commodo erat ac, dapibus turpis. Donec vestibulum lorem eget ornare elementum. Cras enim mauris, aliquet quis venenatis a, posuere at turpis. Phasellus enim lacus, dictum id mi at, efficitur mollis nisi. Sed in augue sit amet augue lacinia ornare. Nullam tempor sed ante tincidunt finibus. Sed et ipsum vel mauris ultrices dictum.
        </p>
        <div className="about-imgs">
            <div className="about-img-col">
                <img alt="Toni" src={Toni} />
                <img alt="Bench portrait" src={BenchPortrait} />
            </div>
            <div className="about-img-col">
                <img alt="Massage room" src={MassageRoom} />
                <img alt="Outdoors table" src={OutdoorsTable} />
                <img alt="View landscape" src={ViewLandscape} />
            </div>
        </div>
    </div>
);

export default About;