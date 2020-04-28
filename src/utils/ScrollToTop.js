import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const aboutHeight = window.innerHeight;

export const scrollTo = (height) => window.scrollTo({
    top: height || 0,
    behavior: 'smooth',
});

const ScrollToOnMount = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollTo(pathname === '/about' && aboutHeight);
    }, [pathname]);

    return null;
};

export default ScrollToOnMount;