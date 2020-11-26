import { isWidthDown, withWidth } from '@material-ui/core';
import React, { useState } from 'react';
import homeBackground from '../../static/Home/Background.jpg';
import Logo from '../../static/Home/Logo.png';
import { StyledBox, Heading, Subheading, HomeText, Background, StyledSocialMedia } from './styles';

// export const useWindowSize = () => {
//     const [size, setSize] = useState([0, 0]);

//     useLayoutEffect(() => {
//         const updateSize = () => {
//             setSize([window.innerWidth, window.innerHeight]);
//         };
//         // const supportsOrientationChange = 'onorientationchange' in window;
//         // const orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';

//         window.addEventListener('orientationchange', () => {
//             const tmp = () => {
//                 updateSize();
//                 window.removeEventListener('resize', tmp);
//             };
//             window.addEventListener('resize', tmp);
//         });

//         // window.addEventListener('resize', updateSize);
//         // window.addEventListener(orientationEvent, updateSize);
//         updateSize();

//         return () => window.removeEventListener('resize', updateSize);
//     }, []);

//     return size;
// };

const Home = ({ width }) => {
    const [loaded, setLoaded] = useState(false);
    // const [, windowHeight] = useWindowSize();

    return (
        <StyledBox opacity={loaded ? '1' : '0'}>
            <HomeText>
                <Heading component="img" alt="logo" src={Logo} />
                <Subheading size="large">Therapeutic Massage in Hertfordshire</Subheading>
            </HomeText>

            <Background component="img" alt="massage" src={homeBackground} onLoad={() => setLoaded(true)} />

            {!isWidthDown('sm', width) && <StyledSocialMedia />}
        </StyledBox>
    );
};

export default withWidth()(Home);
