import React from 'react';
import menu from '../../../../utils/menu';
import { StyledUL, StyledLI, StyledLink } from './styles';

const DesktopNav = () => (
    <StyledUL component="ul">
        {menu.map(({ name, path }, i) => (
            <StyledLI component="li" key={`menu-${i}`}>
                <StyledLink exact size="medium" to={path}>
                    {name}
                </StyledLink>
            </StyledLI>
        ))}
    </StyledUL>
);

export default DesktopNav;
