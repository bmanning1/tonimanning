import { Box, withStyles } from '@material-ui/core';
import NavLink from '../../components/NavLink';

export const StyledImg = withStyles({
    root: {
        width: '100%',
        transition: 'opacity 2s',
        opacity: '1',
        '&:hover': {
            transition: 'opacity 0s',
            opacity: '0.6'
        }
    }
})(Box);

export const StyledNavLink = withStyles({
    root: {
        transition: 'opacity 2s',
        opacity: ({ opacity }) => opacity,
        '& p': {
            transition: 'opacity 2s',
            opacity: ({ opacity }) => opacity
        }
    }
})(NavLink);
