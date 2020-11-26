import React, { useState } from 'react';
import { StyledIframe } from './styles';

// eslint-disable-next-line max-len
const mapURL = 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Chipperfield%2C%20Hertfordshire+(Toni%20Manning)&ie=UTF8&t=&z=12&iwloc=B&output=embed';

const StyledMap = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <StyledIframe
            component="iframe"
            title="Toni Manning Map"
            src={mapURL}
            onLoad={() => setLoaded(true)}
            opacity={loaded ? '1' : '0'}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
        />
    );
};

export default StyledMap;
