import React from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import Home from '../Home';
import Therapies from '../Therapies';
import Contact from '../Contact';
import About from '../About';
import Nav from './Nav';
import Footer from './Footer';
import { StyledBox } from './styles';
// import Fade from '../utils/Fade';

const App = () => {
    const location = useLocation();

    return (
        <StyledBox>
            <Nav />

            {/* <Fade onChange={location.key}> */}
            <Switch className="content" location={location}>
                <Route path="/therapies"><Therapies /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/"><Home /></Route>
                <Route path="*"><Redirect to="/" /></Route>
            </Switch>
            {/* </Fade> */}

            {location.pathname !== '/' && <Footer />}
        </StyledBox>
    );
};

export default App;
