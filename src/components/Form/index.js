import React from 'react';
import { withStyles } from '@material-ui/core';

const Form = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
})(({ classes, ...props }) => (
    <form className={classes.root} {...props} />
));

export default Form;
