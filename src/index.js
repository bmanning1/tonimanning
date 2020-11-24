import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'fontsource-roboto';
import ScrollToTop from './utils/ScrollToTop';

// LONG
// TODO: Nav component
// TODO: Mobile view (use breakpoint in material UI)

// QUICK
// TODO: Red line under booking/enquiry when errors
// TODO: Add loading for therapy image & double check load of therapy
//          images (maybe put the opacity thing on the text & img instead)
// TODO: Remove warnings in console
// TODO: Do the public bit with the manifesto etc.

// WAITING ON
// TODO: About page
// TODO: Update Privacy policy
// TODO: Remove images not used

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans'
        ].join(',')
    },
    fonts: {
        xLarge: '1.7rem',
        large: '1.3rem',
        medium: '1rem',
        small: '0.88rem'
    },
    colors: {
        darkGray: '#706d6d',
        mediumGray: '#aaa29c',
        lightGray: '#e9e7e6',
        lighterGray: '#f7f7f7'
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
