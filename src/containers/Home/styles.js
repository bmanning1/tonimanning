import { Box, withStyles } from '@material-ui/core';
import Text from '../../components/Text';
import SocialMedia from './SocialMedia';

export const StyledBox = withStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90vh',
        transition: 'opacity 2s',
        opacity: ({ opacity }) => opacity
    }
}))(Box);

export const Heading = withStyles(({
    breakpoints
}) => ({
    root: {
        width: '48.8rem',
        maxWidth: '80vw',
        marginBottom: '1rem',
        [breakpoints.down('sm')]: {
            marginBottom: '0.5rem'
        },
        [`${breakpoints.down('sm')} and (orientation: landscape)`]: {
            marginBottom: '0',
            width: 'auto',
            height: '10vh'
        }
    }
}))(Box);

export const Subheading = withStyles(({
    breakpoints,
    fonts: {
        medium
    },
    colors: {
        mediumGray,
        darkGray
    }
}) => ({
    root: {
        color: darkGray,
        [breakpoints.down('sm')]: {
            color: mediumGray
        },
        [`${breakpoints.down('sm')} and (orientation: landscape)`]: {
            fontSize: medium
        }

    }
}))(Text);

export const HomeText = withStyles(({
    breakpoints
}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '7vh',
        [breakpoints.down('sm')]: {
            margin: '10vh'
        }
    }
}))(Box);

export const Background = withStyles({
    root: {
        overflow: 'hidden',
        width: '100vw',
        position: 'absolute',
        zIndex: '-100',
        height: '100vh',
        objectFit: 'cover',
        top: '0'
    }
})(Box);

export const StyledSocialMedia = withStyles({
    root: {
        margin: '1.8rem'
    }
})(SocialMedia);
