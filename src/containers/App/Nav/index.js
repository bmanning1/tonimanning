import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from '../../../utils/Fade';
import MobileNav from './Mobile';
import DesktopNav from './Desktop';
import { StyledBox } from './styles';

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 50rem)' });

    return (
        <StyledBox>
            <Fade>
                {isSmallScreen ? <MobileNav /> : <DesktopNav />}
            </Fade>
        </StyledBox>
    );
};

export default Nav;
