import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Comments from './comments'
import './index.css';
import Layout from './Layout';
import About from './About';
import Header from './Header';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
  
    <Router  history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/comments" component={Comments}/>
      </Route>  
    </Router>,
    document.getElementById('root')
);
