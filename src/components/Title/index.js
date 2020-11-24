import React from 'react';
import { StyledTypography } from './styles';

const Title = ({ children }) => (
    <StyledTypography variant="h1" align="center">
        {children}
    </StyledTypography>
);

export default Title;
