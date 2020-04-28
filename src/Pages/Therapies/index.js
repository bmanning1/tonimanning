import React from 'react';
import TherapyInfo from './TherapyInfo';
import './Therapies.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Therapy from '../Therapy';

const Therapies = () => {
    let { path } = useRouteMatch();

    // outer div needed to make fade work
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <div className="row">
                        <TherapyInfo therapy="deep-relaxation" />
                        <TherapyInfo therapy="swedish" />
                        <TherapyInfo therapy="sports" />
                    </div>
                    <div className="row">
                        <TherapyInfo therapy="hot-stone" />
                        <TherapyInfo therapy="facial" />
                        <TherapyInfo therapy="indian-head" />
                    </div>
                    <div className="row">
                        <TherapyInfo therapy="bespoke" />
                        <TherapyInfo therapy="reflexology" />
                        <TherapyInfo therapy="online" />
                    </div>
                </Route>
                <Route path={`${path}/:therapy`}><Therapy /></Route>
            </Switch>
        </div>
    );
};

export default Therapies;