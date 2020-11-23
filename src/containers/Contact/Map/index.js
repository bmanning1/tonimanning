import { Box, withStyles } from '@material-ui/core';
import React, { useState } from 'react';

// eslint-disable-next-line max-len
const mapURL = 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Chipperfield%2C%20Hertfordshire+(Toni%20Manning)&ie=UTF8&t=&z=12&iwloc=B&output=embed';

const StyledIframe = withStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        minWidth: '11.8rem',
        transition: 'opacity 2s',
        opacity: ({ opacity }) => opacity
    }
}))(Box);

const StyledMap = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <StyledIframe
            component="iframe"
            opacity={loaded ? '1' : '0'}
            onLoad={() => setLoaded(true)}
            title="Toni Manning Map"
            src={mapURL}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
        />
    );
};

export default StyledMap;
