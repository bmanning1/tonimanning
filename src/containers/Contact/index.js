import React from 'react';
import { Grid } from '@material-ui/core';
import Title from '../../components/Title';
import Text from '../../components/Text';
import ContactForm from './ContactForm';
import Map from './Map';
import { StyledLink } from './styles';

const Phone = ({ children }) => (
    <StyledLink alt="phone Toni Manning" href="tel:07849431937">
        {children}
    </StyledLink>
);
const Email = ({ children }) => (
    <StyledLink alt="email Toni Manning" href="mailto:tonimanning@live.com">
        {children}
    </StyledLink>
);

const Contact = () => (
    <>
        <Title>Contact</Title>

        {/* <Text align="justify">
            To book a treatment or for general enquiries please use the form below or contact Toni
            on <Phone>07849431937</Phone> or via email at <Email>tonimanning@live.co.uk</Email>.
        </Text>
        <Text align="justify">
            If using the form and you do not hear back in a couple of days we may have had a problem with our
            system so please get in contact with the details above.
        </Text> */}

        <Text align="justify">
            To book a treatment or for general enquiries please contact Toni
            on <b><Phone>07849431937</Phone></b> or via email
            at <b><Email>tonimanning@live.co.uk</Email></b>.
        </Text>
        <Map />

        {/* <Grid wrap="wrap" container spacing={6}>
            <Grid item xs>
                <ContactForm />
            </Grid>
            <Grid item xs>
                <Map />
            </Grid>
        </Grid> */}
    </>
);

export default Contact;
