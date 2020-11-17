import React from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    withStyles
} from '@material-ui/core';

const StyledFormControl = withStyles(({
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
        margin: '5px 0',
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
}))(FormControl);

const StyledMenuItem = withStyles(({
    fonts: {
        small
    }
}) => ({
    root: {
        fontSize: small
    }
}))(MenuItem);

const SelectInput = ({ keyName, label, value, options, onChange }) => (
    <StyledFormControl>
        <InputLabel>
            {label}
        </InputLabel>

        <Select value={value} onChange={onChange}>
            {options.map((name, i) => (
                <StyledMenuItem key={`${keyName}-${i}`} value={name}>
                    {name}
                </StyledMenuItem>
            ))}
        </Select>
    </StyledFormControl>
);

export default SelectInput;
