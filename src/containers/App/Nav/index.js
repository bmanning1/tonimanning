import React from 'react';
import { isWidthDown, withWidth } from '@material-ui/core';
import MobileNav from './Mobile';
import DesktopNav from './Desktop';
import { StyledFade } from './styles';

const Nav = ({ width }) => (
    <StyledFade>
        {isWidthDown('sm', width) ? <MobileNav /> : <DesktopNav />}
    </StyledFade>
);

export default withWidth()(Nav);
