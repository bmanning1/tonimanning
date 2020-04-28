import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import therapies from '../../../constants/therapies';
import minPrice from '../../../utils/minPrice';
import './TherapyInfo.css';

const TherapyInfo = ({ therapy }) => {
    let match = useRouteMatch();
    const { name, img, prices } = therapies[therapy];

    return (
        <NavLink className="therapy-info" to={`${match.url}/${therapy}`}>
            <img className="therapy-img" alt={name} src={img} />
            <p className="therapy-info-name">{name}</p>
            <p className="therapy-info-price">From £{minPrice(prices)}</p>
        </NavLink>
    );
};

export default TherapyInfo;