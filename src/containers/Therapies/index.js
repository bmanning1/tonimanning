import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Therapy from '../Therapy';
import therapies from '../../utils/therapies';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { StyledImg, StyledNavLink } from './styles';

const Therapies = () => {
    const { path, url } = useRouteMatch();
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <Title>Therapies</Title>

            <Switch>
                <Route exact path={path}>
                    <Text marginbottom="1.8rem">Please select a therapy for more information.</Text>

                    <Grid container spacing={6}>
                        {Object.entries(therapies).map(([therapy, { name, img, pricesFrom }], i) => (
                            <Grid item xs={6} sm={4} key={`therapy-${i}`}>
                                <StyledNavLink opacity={loaded ? '1' : '0'} to={`${url}/${therapy}`}>
                                    <StyledImg
                                        component="img"
                                        alt={name}
                                        src={img}
                                        onLoad={() => setLoaded(true)}
                                    />

                                    <Text size="medium">{name}</Text>
                                    <Text lightcolor>From £{pricesFrom}</Text>
                                </StyledNavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Route>
                <Route path={`${path}/:therapy`}>
                    <Therapy />
                </Route>
            </Switch>
        </>
    );
};

export default Therapies;
