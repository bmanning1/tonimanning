import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import therapies, { extraDetails } from '../../utils/therapies';
import Text from '../../components/Text';
import { StyledButton, StyledImg, StyledNavLink, ArrowLeft, StyledBox } from './styles';

const TherapyDetails = ({ name, prices, description, img }) => (
    <StyledBox>
        <StyledNavLink to="/therapies">
            <ArrowLeft />
        </StyledNavLink>

        <Text align="justify" size="large">{name}</Text>
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
                <Text lightcolor align="justify">{description}</Text>
                <Text lightcolor align="justify">{extraDetails}</Text>

                {prices.map(({ value, label }, i) => (
                    <Grid container wrap="nowrap" spacing={0} key={`therapy-price-${i}`}>
                        <Grid item xs>
                            <Text align="left" size="medium">
                                {label}
                            </Text>
                        </Grid>
                        <Grid item xs={2}>
                            <Text align="left" size="medium" lightcolor>
                                £{value}
                            </Text>
                        </Grid>
                    </Grid>
                ))}

                <StyledButton to={`/contact?booking=${name}`}>
                    Book
                </StyledButton>
            </Grid>

            <Grid item xs={12} sm={6}>
                <StyledImg component="img" src={img} alt={name} />
            </Grid>
        </Grid>
    </StyledBox>
);

const Therapy = () => {
    const { therapy: searchTherapy } = useParams();
    const therapy = therapies[searchTherapy];

    return therapy ? <TherapyDetails {...therapy} /> : <Redirect to="/" />;
};

export default Therapy;
