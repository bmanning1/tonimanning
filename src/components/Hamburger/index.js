import React from 'react';
import { StyledBoxHamburger } from './styles';

const Hamburger = ({ open, onClick }) => (
    <StyledBoxHamburger onClick={onClick}>
        <div style={{ transform: open ? 'rotate(45deg)' : 'none' }} />
        <div style={{ opacity: open ? 0 : 1, transform: open ? 'translateX(-16px)' : 'none' }} />
        <div style={{ transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none' }} />
    </StyledBoxHamburger>
);

export default Hamburger;
