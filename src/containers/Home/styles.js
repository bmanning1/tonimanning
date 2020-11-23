import { Box, withStyles } from '@material-ui/core';
import Text from '../../components/Text';
import Img from '../../components/Img';

export const StyledBox = withStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        height: '90vh',
        transition: 'opacity 2s',
        opacity: ({ opacity }) => opacity
    }
}))(Box);

export const Heading = withStyles({
    root: {
        width: '48.8rem',
        maxWidth: '100%',
        position: 'absolute',
        top: '4rem'
    }
})(Img);

export const SubHeading = withStyles({
    root: {
        position: 'absolute',
        top: '11.2rem'
    }
})(Text);

export const Background = withStyles(() => ({
    root: {
        minWidth: '100vw',
        height: '100vh',
        objectFit: 'cover'
    }
}))(Img);
