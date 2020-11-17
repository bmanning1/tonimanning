import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { StyledBox, StyledLink } from './styles';

const SocialMedia = () => (
    <StyledBox>
        <StyledLink alt="phone Toni Manning" href="tel:07849431937">
            <FontAwesomeIcon icon={faPhone} />
        </StyledLink>
        <StyledLink alt="email Toni Manning" href="mailto:tonimanning@live.com">
            <FontAwesomeIcon icon={faEnvelope} />
        </StyledLink>
    </StyledBox>
);

export default SocialMedia;
