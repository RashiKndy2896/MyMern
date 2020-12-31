import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Patient from './components/working/Patient';
import Doctor from './components/working/Doctor';
import './App.css';
import axios from 'axios';




const App = () => (
  <Router>
      <Fragment>
        <Navbar />

        <Route exact path='/' component= {Landing} /> 

        <section className="container">
         <Switch>
            <Route exact path='/patient' component= {Patient} />
            <Route exact path='/doctor' component= {Doctor} />
         </Switch>

        </section>

        
      </Fragment>
  </Router>    
);

export default App;
