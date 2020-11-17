import { withStyles } from '@material-ui/core';
import Button from '../../../components/Button';
import Form from '../../../components/Form';

export const StyledButton = withStyles({
    root: {
        marginBottom: '0'
    }
})(Button);

export const StyledForm = withStyles({
    root: {
        minWidth: '12rem'
    }
})(Form);
