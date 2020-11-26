import { Box, CircularProgress, withStyles } from '@material-ui/core';
import Text from '../../../../components/Text';

export const StyledBox = withStyles({
    root: {
        minWidth: '11.8rem',
        height: '27.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }
})(Box);

export const StyledCircularProgress = withStyles({
    root: {
        color: 'rgb(85,148,224)'
    }
})(CircularProgress);

export const StyledText = withStyles({
    root: {
        position: 'absolute',
        bottom: '55%',
        width: '100%'
    }
})(Text);
