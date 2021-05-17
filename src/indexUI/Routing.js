import React from 'react';
import {BrowserRouter as Router} from  'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './headerNav/Header';
import Home from './home/Home';
import About from '../indexUI/about/About';
import Course from './course/Course';
import Pricing from './pricing/Pricing'
import JoinUs from './joinUs/JoinUs';
import Contact from '../indexUI/contact/Contact';
import SignIn from './login/SignIn';




const Routing = () => {
    return (
        <div>
            <Router>
                <Header />
            
            <Switch>
                <Route path="/" exact={true} > <Home /> </Route>
                <Route path="/about" > <About /> </Route>
                <Route path="/course" > <Course /> </Route>
                <Route path="/pricing" > <Pricing /> </Route>
                <Route path="/JoinUs" > <JoinUs /> </Route>
                <Route path="/contact" > <Contact /> </Route>
                <Route path="/SignIn" > <SignIn/> </Route>
            </Switch>
            </Router>
            
        </div>
    );
}

export default Routing;
