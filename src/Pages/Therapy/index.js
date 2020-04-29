import React from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import therapies from '../../constants/therapies';
import minPrice from '../../utils/minPrice';
import './Therapy.css';

const TherapyDetails = ({ name, prices, description, img }) => (
    <div className="therapy">
        <NavLink className="arrow-left" to="/therapies"><div /></NavLink>
        <div className="therapy-container">
            <div className="therapy-container-col">
                <div className="therapy-text">
                    <p className="therapy-title">{name}</p>
                    <p className="therapy-price-from">From £{minPrice(prices)}</p>
                    <p className="therapy-description">{description}</p>
                    <table>
                        <tbody>
                            {prices.map(({ value, label, subtext }, i) => (
                                <tr key={`therapy-price-${i}`}>
                                    <td className="therapy-price-label">
                                        {label}
                                        <p className="therapy-price-subtext">{subtext}</p>
                                    </td>
                                    <td className="therapy-price-value" valign="top">£{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <NavLink to="/contact">Book</NavLink>
            </div>
            <div className="therapy-container-col">
                <img className="therapy-img" src={img} alt={name} />
            </div>
        </div>
    </div>
);

const Therapy = () => {
    const { therapy: searchTherapy } = useParams();
    const therapy = therapies[searchTherapy];

    return therapy ? <TherapyDetails {...therapy} /> : <Redirect to="/" />;
};

export default Therapy;