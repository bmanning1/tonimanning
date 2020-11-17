import React from 'react';
import { Grid } from '@material-ui/core';
import Title from '../../components/Title';
import Text from '../../components/Text';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => (
    <>
        <Title>Contact</Title>

        <Text align="justify">
            To book a treatment or for general enquiries please use the form below or contact me on 07849431937 or
            via email at tonimanning@live.co.uk.
        </Text>
        <Text align="justify">
            If using the form and you do not hear back in a couple of days we may have had a problem with our
            system so please get in contact with the details above.
        </Text>

        <Grid wrap="wrap" container spacing={6}>
            <Grid item xs>
                <ContactForm />
            </Grid>
            <Grid item xs>
                <Map />
            </Grid>
        </Grid>
    </>
);

export default Contact;
