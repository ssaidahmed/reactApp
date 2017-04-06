import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import Layout from './Layout';
import About from './About';
import Header from './Header';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
  
    <Router  history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={About}/>
      </Route>  
    </Router>,
    document.getElementById('root')
);
