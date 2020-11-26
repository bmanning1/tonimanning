import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';

const privacy = `Your privacy is important to me.

    I collect two types of information from clients/potential clients:

    contact information - address, email address, phone numbers; and
    treatment related information - if you do have a treatment, I will
    need to collect some health / lifestyle information from you. This
    helps me to tailor the treatment to your circumstances. I will also
    keep records of the treatments I carry out on you.
    With your permission, I will add your email address to an electronic
    mailing list that I occasionally use to send out information about
    offers, new treatments etc. If you no longer wish to receive these,
    you can unsubscribe at any time either by contacting me or by using
    the link that will be contained in all the emails that I send out.

    The treatment related information is only kept on paper and is held
    safely. I will dispose of it securely once I no longer need it.

    I will not share any of your personal information (either your contact
    information or treatment related information) with anyone else, even in anonymised form.

    If you have any concerns about privacy or the safety or accuracy of the
    information I hold about you, please contact me.`;

const PrivacyModal = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>
            <Text size="medium">Privacy</Text>
        </DialogTitle>
        <DialogContent dividers>
            <Text align="justify">{privacy}</Text>
        </DialogContent>
        <DialogActions>
            <Button size="small" nofill onClick={onClose}>
                Close
            </Button>
        </DialogActions>
    </Dialog>
);

export default PrivacyModal;
