import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import Therapy from '../Therapy';
import therapies from '../../constants/therapies';
import minPrice from '../../utils/minPrice';
import './Therapies.css';

const TherapySummary = ({ therapy }) => {
    const match = useRouteMatch();
    const { name, img, prices } = therapies[therapy];

    return (
        <NavLink className="therapy-summary" to={`${match.url}/${therapy}`}>
            <img className="therapy-summary-img" alt={name} src={img} />
            <p className="therapy-summary-name">{name}</p>
            <p className="therapy-summary-price">From £{minPrice(prices)}</p>
        </NavLink>
    );
};

const Therapies = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <div className="row">
                    <TherapySummary therapy="deep-relaxation" />
                    <TherapySummary therapy="swedish" />
                    <TherapySummary therapy="sports" />
                </div>
                <div className="row">
                    <TherapySummary therapy="hot-stone" />
                    <TherapySummary therapy="facial" />
                    <TherapySummary therapy="indian-head" />
                </div>
                <div className="row">
                    <TherapySummary therapy="bespoke" />
                    <TherapySummary therapy="reflexology" />
                    <TherapySummary therapy="online" />
                </div>
            </Route>
            <Route path={`${path}/:therapy`}><Therapy /></Route>
        </Switch>
    );
};

export default Therapies;