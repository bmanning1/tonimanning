import { Typography, withStyles } from '@material-ui/core';

export const StyledTypography = withStyles(({
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
