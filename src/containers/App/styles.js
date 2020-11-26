import { Box, withStyles } from '@material-ui/core';

export const StyledBox = withStyles(() => ({
    root: {
        overflow: ({ overflow }) => overflow,
        margin: 'auto',
        padding: '0 1.8rem'
    }
}))(Box);
