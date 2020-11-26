import { withStyles } from '@material-ui/core';
import Fade from '../../../utils/Fade';

export const StyledFade = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '10vh',
        zIndex: '2',
        position: 'relative'
    }
})(Fade);
