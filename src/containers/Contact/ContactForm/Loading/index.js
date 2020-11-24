import React, { useEffect, useState } from 'react';
import { StyledBox, StyledCircularProgress, StyledText } from './styles';

const Loading = () => {
    const [waitingText, setWaitingText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setWaitingText('Sorry for the wait...'), 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <StyledBox component="div">
            <StyledCircularProgress />
            <StyledText>{waitingText}</StyledText>
        </StyledBox>
    );
};

export default Loading;
