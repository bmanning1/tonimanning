import { TextField, withStyles } from '@material-ui/core';

export const StyledTextField = withStyles(({
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
        '& .MuiInput-underline:hover:before, & .Mui-focused.MuiInput-underline:after': {
            borderBottomColor: mediumGray
        },
        '& .Mui-error.MuiInput-underline:after, & .Mui-error.MuiInput-underline:hover:before': {
            borderBottomColor: 'red',
            borderWidth: '1px'
        }
    }
}))(TextField);
