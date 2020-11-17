import { Box, withStyles } from '@material-ui/core';

export const StyledBox = withStyles({
    root: {
        maxWidth: '56rem',
        margin: 'auto',
        padding: '0 2rem'
    }
})(Box);
