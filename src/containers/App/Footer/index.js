import React, { useState } from 'react';
import Button from '../../../components/Button';
import PrivacyModal from './PrivacyModal';
import { StyledBox } from './styles';

const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledBox>
            <PrivacyModal open={open} onClose={() => setOpen(false)} />

            <Button size="small" nofill onClick={() => setOpen(true)}>
                Privacy
            </Button>
        </StyledBox>
    );
};

export default Footer;
