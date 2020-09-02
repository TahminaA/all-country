import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './Country/CountryDetail/CountryDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route  exact path='/'>
        <Home></Home>
        </Route>
        <Route   path='/country/:countryDetail'>
        <CountryDetail></CountryDetail>
        </Route>
        <Route path='*'>
         <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;
