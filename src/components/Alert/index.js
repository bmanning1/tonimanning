import React from 'react';
import { Snackbar } from '@material-ui/core';
import { StyledAlert, StyledText } from './styles';

const Alert = ({ open, onClose, text, type = 'success' }) => (
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
