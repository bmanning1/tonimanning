import { Box, withStyles } from '@material-ui/core';

export const StyledBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '10vh',
        zIndex: '2',
        position: 'relative'
    }
})(Box);
