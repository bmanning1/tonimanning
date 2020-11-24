import React from 'react';
import { StyledNavLink, StyledButton } from './styles';

const Button = ({ to, nofill, ...props }) => {
    const buttonProps = {
        disableRipple: nofill,
        nofill: nofill ? 'true' : undefined,
        ...props
    };

    return (to ? (
        <StyledNavLink to={to}>
            <StyledButton {...buttonProps} />
        </StyledNavLink>
    ) : <StyledButton {...buttonProps} />);
};

export default Button;
