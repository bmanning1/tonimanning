import React from 'react';

const Img = ({
    alt,
    classes = {},
    ...props
}) => (
    <img
        alt={alt}
        className={classes.root}
        {...props}
    />
);

export default Img;
