import React, { useEffect, useState } from 'react';
import { StyledBox, StyledCircularProgress, StyledText } from './styles';

const Loading = () => {
    const [waitingText, setWaitingText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setWaitingText('Sorry for the wait...'), 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <StyledBox>
            <StyledCircularProgress />
            <StyledText>{waitingText}</StyledText>
        </StyledBox>
    );
};

export default Loading;
