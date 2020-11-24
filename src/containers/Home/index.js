import React, { useState } from 'react';
import homeBackground from '../../static/Home/Background.jpg';
import Logo from '../../static/Home/Logo.png';
import SocialMedia from './SocialMedia';
import { StyledBox, Heading, SubHeading, Background } from './styles';

const Home = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <StyledBox opacity={loaded ? '1' : '0'}>
            <Heading component="img" alt="logo" src={Logo} />
            <SubHeading size="large">Therapeutic Massage in Hertfordshire</SubHeading>

            <Background component="img" alt="massage" src={homeBackground} onLoad={() => setLoaded(true)} />

            <SocialMedia />
        </StyledBox>
    );
};

export default Home;
