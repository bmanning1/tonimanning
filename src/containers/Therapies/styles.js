import { withStyles } from '@material-ui/core';
import Img from '../../components/Img';

export const StyledImg = withStyles({
    root: {
        width: '100%',
        transition: 'opacity 2s',
        opacity: '0',
        '&:hover': {
            transition: 'opacity 0s',
            opacity: '0.6 !important'
        }
    }
})(Img);
