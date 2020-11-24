import React from 'react';
import { StyledNavLink } from './styles';

const NavLink = ({ size = 'medium', classes = {}, ...props }) => (
    <StyledNavLink
        size={size}
        className={classes.root}
        {...props}
    />
);

export default NavLink;
