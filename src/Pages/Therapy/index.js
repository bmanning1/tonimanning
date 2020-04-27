import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import therapies from '../../constants/therapies';
import minPrice from '../../utils/minPrice';
import './Therapy.css';

const Therapy = () => {
    const { therapy } = useParams();
    const { name, prices, description, img } = therapies[therapy];

    return (
        <div className="therapy-page">
            <NavLink className="arrow-left" to="/therapies"><div/></NavLink>
            <div className="therapy-container">
                <div className="therapy-container-col">
                    <div className="therapy-text">
                        <p className="therapy-title">{name}</p>
                        <p className="therapy-price-from">From £{minPrice(prices)}</p>
                        <p className="therapy-description">{description}</p>
                        <table>
                            {prices.map(({ value, label, subtext }, i) => (
                                <tr key={`therapy-price-${i}`}>
                                    <td className="therapy-price-label">
                                        {label}
                                        <p className="therapy-price-subtext">{subtext}</p>
                                    </td>
                                    <td className="therapy-price-value" valign="top">£{value}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <NavLink to="/contact">Book</NavLink>
                </div>
                <div className="therapy-container-col">
                    <img className="therapy-img" src={img} alt={name}/>
                </div>
            </div>
        </div>
    );
};

export default Therapy;