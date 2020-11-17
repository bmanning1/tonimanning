import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'fontsource-roboto';

// TODO: Remove warnings in console
// TODO: Remove images not used
// TODO: Do the public bit with the manifesto etc.
// TODO: Update Privacy policy
// TODO: About page
// TODO: Contact page
// TODO: Nav component
// TODO: Mobile view (use breakpoint in material UI)
// TODO: Move Map to components folder

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
            <App />
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
