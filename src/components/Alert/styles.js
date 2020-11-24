import { withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Text from '../Text';

export const StyledAlert = withStyles(({
    fonts: {
        small
    }
}) => ({
    root: {
        marginBottom: '0.8rem',
        padding: '0.4rem 0.8rem',
        fontSize: small
    }
}))(Alert);

export const StyledText = withStyles({
    root: {
        color: 'white',
        margin: '0'
    }
})(Text);
