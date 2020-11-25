import React, { useState } from 'react';
import menu from '../../../../utils/menu';
import Hamburger from '../../../../components/Hamburger';
import NavLink from '../../../../components/NavLink';
import { StyledUL, StyledLI } from './styles';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Hamburger onClick={() => setOpen(!open)} open={open} />

            <StyledUL component="ul" open={open}>
                {menu.map(({ name, path }, i) => (
                    <StyledLI component="li" key={`menu-${i}`}>
                        <NavLink exact size="large" to={path} onClick={() => setOpen(false)}>
                            {name}
                        </NavLink>
                    </StyledLI>
                ))}
            </StyledUL>
        </>
    );
};

export default MobileNav;
