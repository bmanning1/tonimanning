import React from 'react';
import { StyledTypography } from './styles';

const Text = ({
    size = 'small',
    lightcolor = false,
    align = 'center',
    classes = {},
    marginbottom,
    children
}) => (
    <StyledTypography
        variant="body1"
        lightcolor={lightcolor ? 1 : 0}
        size={size}
        align={align}
        className={classes.root}
        marginbottom={marginbottom}
    >
        {children}
    </StyledTypography>
);

export default Text;
