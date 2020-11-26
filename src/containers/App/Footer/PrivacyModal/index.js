import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';

const privacy = [
    `Completed contact forms submitted from the website will be sent to a google form and not shared with any
     other parties.`,

    `During the initial consultation, information will be collected from you in order for you to receive
     tailored massages and to ensure a safe treatment. This data will not be passed on to third parties.`,

    `Records will be safely stored for up to 7 years and any information that is not required or is out of
     date will be removed.  Please get in touch if any of your details change so that your records can be updated.`
];

const PrivacyModal = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose}>
        <Text size="medium">Privacy Notice</Text>
        <DialogContent dividers>
            {privacy.map((paragraph) => (
                <Text align="justify">{paragraph}</Text>
            ))}
        </DialogContent>
        <Button size="small" nofill onClick={onClose}>
            Close
        </Button>
    </Dialog>
);

export default PrivacyModal;
