import { Box, Link, withStyles } from '@material-ui/core';

export const StyledLink = withStyles(({
    colors: {
        mediumGray,
        darkGray
    }
}) => ({
    root: {
        margin: '0 0.3rem',
        color: mediumGray,
        '&:hover': {
            color: darkGray
        }
    }
}))(Link);

export const StyledBox = withStyles(({
    fonts: {
        medium
    }
}) => ({
    root: {
        fontSize: medium
    }
}))(Box);
