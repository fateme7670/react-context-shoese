import React from 'react';
import {  BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from '../component/home'
import Contact from '../component/conntactus'
import Men from '../component/Men'
import Weman from '../component/Woman'
import Product from '../component/Products'
 

export default function Index() {
  return (
    <Router>
    <Switch>
    <Route  to='/'>
        <Home />
    </Route>
    <Route  to='/men'>
        <Men />
    </Route>
    <Route  to='/Woman'>
        <Weman />
    </Route>
    <Route  to='/contactus'>
        <Contact />
    </Route>
    <Route  to='/products'>
        <Product />
    </Route>
    </Switch>
    </Router>
  );
}
