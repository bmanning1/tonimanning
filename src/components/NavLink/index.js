import React from 'react';
import { withStyles } from '@material-ui/core';
import { NavLink as ReactNavLink } from 'react-router-dom';

const UnstyledNavLink = ({
    size = 'medium',
    classes = {},
    ...props
}) => (
    <ReactNavLink
        size={size}
        className={classes.root}
        {...props}
    />
);

const NavLink = withStyles(({
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
}))(UnstyledNavLink);

export default NavLink;
