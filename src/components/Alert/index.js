import React from 'react';
import { Snackbar, withStyles } from '@material-ui/core';
import { Alert as MaterialUIAlert } from '@material-ui/lab';
import Text from '../Text';

const StyledAlert = withStyles(({
    fonts: {
        small
    }
}) => ({
    root: {
        marginBottom: '1rem',
        padding: '0.6rem 1rem',
        fontSize: small
    }
}))(MaterialUIAlert);

const StyledText = withStyles({
    root: {
        color: 'white',
        margin: '0'
    }
})(Text);

const Alert = ({ open, onClose, type = 'success', text }) => (
    <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
    >
        <StyledAlert
            onClose={onClose}
            elevation={0}
            severity={type}
            variant="filled"
        >
            <StyledText>
                {text}
            </StyledText>
        </StyledAlert>
    </Snackbar>
);

export default Alert;
