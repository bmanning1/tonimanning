import React from 'react';
import { Grid } from '@material-ui/core';
import Title from '../../components/Title';
import Text from '../../components/Text';
// import Toni from '../../static/About/Toni.jpg';
// import ToniClose from '../../static/About/ToniClose.jpg';
import Landscape from '../../static/About/Landscape.jpg';
import { StyledImg, StyledGrid } from './styles';

const About = () => (
    <>
        <Title>About</Title>

        <Grid wrap="wrap" container spacing={6}>
            <StyledGrid item xs>
                <Text align="justify">
                    Toni Manning is an advanced clinical massage therapist with 20 years experience in her field.
                </Text>
                <Text align="justify">
                    In addition to specialisms in sports massage and deep tissue massage she is a qualified practitioner
                    in Indian head massage, reflexology, hot stone massage and facial reflexology.
                </Text>
                <Text align="justify">
                    Based in her private treatment room in South West Hertfordshire, Toni Manning is a member of the
                    Complementary Therapists Association.
                </Text>
            </StyledGrid>
            <StyledGrid item xs>
                <StyledImg src={Landscape} />
                {/* NOTE: The following allows for 2 images */}
                {/* <Grid container wrap="wrap" spacing={1}>
                    <Grid item xs>
                        <StyledImg src={Toni} />
                    </Grid>
                    <Grid item xs>
                        <StyledImg src={ToniClose} />
                    </Grid>
                </Grid> */}
            </StyledGrid>
        </Grid>
    </>
);

export default About;
