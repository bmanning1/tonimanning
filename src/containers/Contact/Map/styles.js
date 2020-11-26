import { Box, withStyles } from '@material-ui/core';

export const StyledIframe = withStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        minWidth: '11.8rem',
        minHeight: '27.5rem',
        transition: 'opacity 2s',
        opacity: ({ opacity }) => opacity
    }
}))(Box);
