import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const aboutHeight = window.innerHeight;

export const scrollTo = (height) => window.scrollTo({
    top: height || 0,
    behavior: 'smooth',
});

export const ScrollToOnMount = () => {
    const { pathname, key } = useLocation();

    useEffect(() => {
        scrollTo(pathname === '/about' && aboutHeight);
    }, [pathname, key]);

    return null;
};
