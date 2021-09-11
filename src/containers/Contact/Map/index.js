import React, { useState } from 'react';
import { StyledIframe } from './styles';

// eslint-disable-next-line max-len
const mapURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19805.745555931775!2d-0.4517990627054865!3d51.64668577965829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a516d83d03b%3A0x3ca3123f56fb9cad!2sByewaters%2C%20Watford!5e0!3m2!1sen!2suk!4v1631374132553!5m2!1sen!2suk';

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
