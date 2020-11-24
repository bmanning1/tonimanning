import { Typography, withStyles } from '@material-ui/core';

export const StyledTypography = withStyles(({
    fonts,
    colors: {
        darkGray,
        mediumGray
    }
}) => ({
    root: {
        fontSize: ({ size }) => fonts[size],
        color: ({ lightcolor }) => (lightcolor === 1 ? mediumGray : darkGray),
        margin: ({ marginbottom }) => (marginbottom ? `0.8rem 0 ${marginbottom}` : '0.8rem 0')
    }
}))(Typography);
