import { Box, withStyles } from '@material-ui/core';
import Button from '../../components/Button';
import Img from '../../components/Img';
import NavLink from '../../components/NavLink';

export const StyledButton = withStyles({
    root: {
        marginTop: '3rem'
    }
})(Button);

export const StyledImg = withStyles({
    root: {
        width: '100%',
        marginTop: '1rem'
    }
})(Img);

export const StyledNavLink = withStyles({
    root: {
        margin: '0 0 1rem'
    }
})(NavLink);

export const ArrowLeft = withStyles(({
    colors: {
        mediumGray,
        darkGray
    }
}) => ({
    root: {
        border: `solid ${mediumGray}`,
        borderWidth: '0 0 1px 1px',
        display: 'inline-block',
        padding: '8px',
        transform: 'rotate(45deg)',
        '&:hover': {
            borderColor: darkGray
        }
    }
}))(Box);

export const StyledBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
})(Box);
