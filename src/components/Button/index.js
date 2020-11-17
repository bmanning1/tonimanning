import React from 'react';
import { Button as MaterialUIButton, withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const StyledNavLink = withStyles(({
    colors: {
        darkGray
    }
}) => ({
    root: {
        color: darkGray,
        textDecoration: 'none'
    }
}))(({ classes, ...props }) => <NavLink className={classes.root} {...props} />);

const StyledButton = withStyles(({
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
        padding: '1rem 4rem',
        width: 'fit-content',
        margin: ({ nofill }) => (nofill ? 'auto' : '2rem auto'),
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
}))(MaterialUIButton);

const Button = ({ to, ...props }) => {
    const { nofill } = props;

    return (to ? (
        <StyledNavLink to={to}>
            <StyledButton disableRipple={nofill} {...props} />
        </StyledNavLink>
    ) : <StyledButton disableRipple={nofill} {...props} />
    );
};

export default Button;
