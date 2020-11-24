import { Box, withStyles } from '@material-ui/core';
import Button from '../../../components/Button';

export const StyledButton = withStyles({
    root: {
        marginBottom: '0'
    }
})(Button);

export const StyledForm = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '11.8rem'
    }
})(Box);
