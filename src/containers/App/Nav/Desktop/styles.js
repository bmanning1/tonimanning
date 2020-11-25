import { Box, withStyles } from '@material-ui/core';
import NavLink from '../../../../components/NavLink';

export const StyledUL = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '70vw',
        padding: '0'
    }
})(Box);

export const StyledLI = withStyles(() => ({
    root: {
        listStyleType: 'none',
        padding: '0 0.8rem'
    }
}))(Box);

export const StyledLink = withStyles(({
    colors: {
        darkGray
    }
}) => ({
    root: {
        color: darkGray
    }
}))(NavLink);
