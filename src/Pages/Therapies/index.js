import React from 'react';
import TherapyInfo from './TherapyInfo';
import './Therapies.css';

const Therapies = () => (
    <div className="therapies-page">
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
    </div>
);

export default Therapies;