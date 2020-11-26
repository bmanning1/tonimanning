import { Box, Grid, withStyles } from '@material-ui/core';

export const StyledImg = withStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        backgroundImage: ({ src }) => `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '15rem'
    }
}))(Box);

export const StyledGrid = withStyles({
    root: {
        minWidth: '11.8rem'
    }
})(Grid);
