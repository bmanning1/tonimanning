import { Box, withStyles } from '@material-ui/core';

export const StyledUL = withStyles(() => ({
    root: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        opacity: '0.95',
        zIndex: '2',
        padding: '0',
        margin: '0',
        transition: 'margin-top 0.2s ease',
        height: '100vh',
        marginTop: ({ open }) => (open ? '0' : '-100vh')
    }
}))(Box);

export const StyledLI = withStyles(({
    breakpoints
}) => ({
    root: {
        margin: ({ child }) => (child === 0 ? '15vh 0.8rem 0.8rem' : '0.8rem'),
        [`${breakpoints.down('xs')} and (orientation: landscape)`]: {
            margin: ({ child }) => (child === 0 ? '2rem 0.8rem 0.8rem' : '0.8rem')
        },
        textAlign: 'center',
        listStyleType: 'none'
    }
}))(Box);

export const StyledLISocialMedia = withStyles(({
    breakpoints
}) => ({
    root: {
        margin: '5vh',
        [`${breakpoints.down('xs')} and (orientation: landscape)`]: {
            margin: '1rem'
        }
    }
}))(StyledLI);
