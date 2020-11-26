import React from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import Home from '../Home';
import Therapies from '../Therapies';
import Contact from '../Contact';
import About from '../About';
import Nav from './Nav';
import Footer from './Footer';
import { StyledBox } from './styles';

const App = () => {
    const location = useLocation();
    const onHomePage = location.pathname === '/';

    return (
        <StyledBox overflow={onHomePage ? 'hidden' : 'inherit'}>
            <Nav />

            <Switch className="content" location={location}>
                <Route path="/therapies"><Therapies /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/"><Home /></Route>
                <Route component={() => <Redirect to="/" />} />
            </Switch>

            {!onHomePage && <Footer />}
        </StyledBox>
    );
};

export default App;
