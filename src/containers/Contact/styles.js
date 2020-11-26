import { Link, withStyles } from '@material-ui/core';

export const StyledLink = withStyles(({
    colors: {
        darkGray
    }
}) => ({
    root: {
        color: darkGray,
        '&:hover': {
            color: darkGray,
            fontWeight: 'bold',
            textDecoration: 'none'
        }
    }
}))(Link);
