import React from 'react';
import {
    TextField,
    withStyles
} from '@material-ui/core';

const StyledTextField = withStyles(({
    colors: {
        lightGray,
        mediumGray,
        darkGray
    },
    fonts: {
        small,
        medium
    }
}) => ({
    root: {
        margin: '8px 0',
        '& label': {
            fontSize: medium
        },
        '& label.Mui-focused': {
            color: darkGray
        },
        '& input, & .MuiInputBase-root': {
            color: darkGray,
            fontSize: small
        },
        '& .MuiInput-underline:after, & .MuiInput-underline:before': {
            borderBottomColor: lightGray
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before, & .Mui-focused.MuiInput-underline:after': {
            borderBottomColor: mediumGray
        }
    }
}))(TextField);

const Input = ({ label, value, onChange, multiline }) => {
    const multilineProps = multiline ? { multiline, rows: 6 } : {};

    return (
        <StyledTextField
            label={label}
            value={value}
            onChange={onChange}
            {...multilineProps}
        />
    );
};

export default Input;
