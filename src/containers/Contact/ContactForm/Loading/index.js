import React, { useEffect, useState } from 'react';
import { StyledBox, StyledCircularProgress, StyledText } from './styles';

const Loading = () => {
    const [waitingText, setWaitingText] = useState(false);

    useEffect(() => {
        setTimeout(() => setWaitingText('Sorry for the wait...'), 4000);
    }, []);

    return (
        <StyledBox component="div">
            <StyledCircularProgress />
            <StyledText>{waitingText}</StyledText>
        </StyledBox>
    );
};

export default Loading;
