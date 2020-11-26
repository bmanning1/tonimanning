import React, { useState } from 'react';
import menu from '../../../../utils/menu';
import Hamburger from '../../../../components/Hamburger';
import NavLink from '../../../../components/NavLink';
import SocialMedia from '../../../Home/SocialMedia';
import { StyledUL, StyledLI, StyledLISocialMedia } from './styles';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Hamburger onClick={() => setOpen(!open)} open={open} />

            <StyledUL component="ul" open={open}>
                {menu.map(({ name, path }, i) => (
                    <StyledLI child={i} component="li" key={`menu-${i}`}>
                        <NavLink exact size="large" to={path} onClick={() => setOpen(false)}>
                            {name}
                        </NavLink>
                    </StyledLI>
                ))}
                <StyledLISocialMedia component="li">
                    <SocialMedia />
                </StyledLISocialMedia>
            </StyledUL>
        </>
    );
};

export default MobileNav;
