import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const StyledTypography = withStyles((
    {
        fonts,
        colors: {
            darkGray,
            mediumGray
        }
    }
) => ({
    root: {
        fontSize: ({ size }) => fonts[size],
        color: ({ lightcolor }) => (lightcolor === 1 ? mediumGray : darkGray),
        margin: ({ marginbottom }) => (marginbottom ? `0.8rem 0 ${marginbottom}` : '0.8rem 0')
    }
}))(Typography);

const Text = ({
    size = 'small',
    lightcolor = false,
    align = 'center',
    classes = {},
    marginbottom,
    children
}) => (
    <StyledTypography
        variant="body1"
        lightcolor={lightcolor ? 1 : 0}
        size={size}
        align={align}
        className={classes.root}
        marginbottom={marginbottom}
    >
        {children}
    </StyledTypography>
);

export default Text;
