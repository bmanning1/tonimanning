import { withStyles } from '@material-ui/core';
import React, { useState } from 'react';

// eslint-disable-next-line max-len
const mapURL = 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Chipperfield%2C%20Hertfordshire+(Toni%20Manning)&ie=UTF8&t=&z=12&iwloc=B&output=embed';

const Map = ({ classes }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <iframe
            className={classes.root}
            style={loaded ? { opacity: 1 } : { opacity: 0 }}
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

const StyledMap = withStyles({
    root: {
        width: '100%',
        height: '100%',
        minWidth: '12rem',
        opacity: '0',
        transition: 'opacity 2s'
    }
})(Map);

export default StyledMap;
