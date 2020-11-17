import { Box, withStyles } from '@material-ui/core';
import Text from '../../components/Text';
import Img from '../../components/Img';

export const StyledBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        height: '90vh',
        opacity: '0',
        transition: 'opacity 3s'
    }
})(Box);

export const Heading = withStyles({
    root: {
        width: '50rem',
        maxWidth: '100%',
        position: 'absolute',
        top: '5rem'
    }
})(Img);

export const SubHeading = withStyles({
    root: {
        position: 'absolute',
        top: '12rem'
    }
})(Text);

export const Background = withStyles({
    root: {
        minWidth: '100vw',
        height: '100vh',
        objectFit: 'cover'
    }
})(Img);
