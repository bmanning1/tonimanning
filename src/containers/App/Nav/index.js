import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './Mobile';
import DesktopNav from './Desktop';
import { StyledFade } from './styles';

const Nav = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 50rem)' });

    return (
        <StyledFade>
            {isSmallScreen ? <MobileNav /> : <DesktopNav />}
        </StyledFade>
    );
};

export default Nav;
