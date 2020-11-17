import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const StyledTypography = withStyles(({
    fonts: {
        xLarge
    },
    colors: {
        darkGray
    }
}) => ({
    root: {
        fontSize: xLarge,
        color: darkGray,
        fontWeight: 'inherit',
        margin: '2rem'
    }
}))(Typography);

const Title = ({ children }) => (
    <StyledTypography variant="h1" align="center">
        {children}
    </StyledTypography>
);

export default Title;
