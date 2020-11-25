import { Box, withStyles } from '@material-ui/core';

export const StyledBoxHamburger = withStyles(({
    colors: {
        mediumGray
    }
}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        cursor: 'pointer',
        position: 'fixed',
        top: '2.3rem',
        left: '1.8rem',
        zIndex: '99',
        color: mediumGray,
        '& div': {
            height: '2px',
            width: '28px',
            background: mediumGray,
            transition: 'all 0.5s ease'
        },
        '& div:nth-child(1)': {
            transformOrigin: 'top left',
            marginBottom: '8px'
        },
        '& div:nth-child(3)': {
            transformOrigin: 'top left',
            marginTop: '8px'
        }
    }
}))(Box);
