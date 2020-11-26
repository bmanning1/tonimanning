import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './utils/ScrollToTop';
import 'fontsource-roboto';
import './index.css';

// WAITING ON
// TODO: Update Privacy policy

// NO RUSH
// TODO: Update About page images & then remove images not used
// TODO: Replace Fade with the Fade from material UI
// TODO: Fix audits - Branch exists already, just can't get it to run. Ran npm audit

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
