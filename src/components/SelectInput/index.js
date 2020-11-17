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
}))(FormControl);

const SelectInput = ({ keyName, label, value, options, onChange }) => (
    <StyledFormControl>
        <InputLabel>
            {label}
        </InputLabel>

        <Select value={value} onChange={onChange}>
            {options.map((name, i) => (
                <MenuItem key={`${keyName}-${i}`} value={name}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    </StyledFormControl>
);

export default SelectInput;
