import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = withStyles(({
    colors: {
        darkGray
    }
}) => ({
    root: {
        color: darkGray,
        textDecoration: 'none'
    }
}))(({ classes, ...props }) => <NavLink className={classes.root} {...props} />);

export const StyledButton = withStyles(({
    colors: {
        lighterGray,
        lightGray,
        mediumGray,
        darkGray
    },
    fonts
}) => ({
    root: {
        borderRadius: '30px',
        padding: '0.8rem 3.8rem',
        width: 'fit-content',
        margin: ({ nofill }) => (nofill ? 'auto' : '1.8rem auto'),
        color: darkGray,
        display: 'flex',
        fontSize: ({ size = 'medium' }) => fonts[size],
        textTransform: 'none',
        backgroundColor: ({ nofill }) => (nofill ? 'transparent' : lightGray),
        '&:hover': {
            color: mediumGray,
            backgroundColor: ({ nofill }) => (nofill
                ? 'transparent'
                : lighterGray)
        }
    }
}))(Button);
