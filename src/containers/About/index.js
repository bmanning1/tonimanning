import React from 'react';
import Text from '../../components/Text';
import Title from '../../components/Title';
// import Toni from '../../static/About/Toni.jpg';
// import { StyledImg } from './styles';

const About = () => (
    <>
        <Title>About</Title>

        <Text align="justify">
            Toni Manning is an advanced clinical massage therapist with 20 years experience in her field.
            In addition to specialisms in sports massage and deep tissue massage she is a qualified practitioner
            in Indian head massage, reflexology, hot stone massage and facial reflexology. Based in her private
            treatment room in South West Hertfordshire, Toni Manning is a member of the Complementary Therapists
            Association.
        </Text>

        {/* <StyledImg component="img" alt="Toni Manning" src={Toni} /> */}
    </>
);

export default About;
