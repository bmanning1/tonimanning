import React from 'react';
import { withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = withStyles(({
    fonts,
    colors: {
        mediumGray,
        darkGray
    }
}) => ({
    root: {
        color: mediumGray,
        fontSize: ({ size }) => fonts[size],
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            color: darkGray
        }
    }
}))(({ classes, size = 'medium', ...props }) => (
    <NavLink
        className={classes.root}
        size={size}
        {...props}
    />
));

export default StyledNavLink;
