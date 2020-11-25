import React, { useEffect, useState } from 'react';
import { Box, withStyles } from '@material-ui/core';

const StyledBox = withStyles(() => ({
    root: ({ fade }) => (fade === 'true' ? {
        opacity: '1',
        transition: 'opacity 400ms ease-in'
    } : {
        opacity: '0.1'
    })
}))(Box);

const Fade = (props) => {
    const [fade, setFade] = useState(undefined);

    useEffect(() => {
        setFade(undefined);
        setTimeout(() => setFade('true'), 50);
    }, []);

    return <StyledBox fade={fade} {...props} />;
};

export default Fade;
