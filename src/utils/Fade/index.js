import React, { useEffect, useState } from 'react';

const Fade = ({ onChange, children }) => {
    const [fade, setFade] = useState(false);

    const hiddenStyle = {
        opacity: 0.1,
    };

    const fadeInStyle = {
        opacity: 1,
        transition: 'opacity 400ms ease-in'
    };

    useEffect(() => {
        setFade(false);
        setTimeout(() => setFade(true), 50);
    }, [onChange]);

    return <div style={fade ? fadeInStyle : hiddenStyle}>{children}</div>;
};

export default Fade;