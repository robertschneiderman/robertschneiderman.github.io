import React from 'react';
import ReactDOM from 'react-dom';

import GetStarted from './auth/components/get-started';
import Signout from './auth/components/signout';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash';
import Dashboard from './dashboard/components/';
import Results from './dashboard/components/results';
// import Dashboard from './dashboard/components/index';

import store from './store'; 

//   <Provider store={store}>
//   </Provider>
ReactDOM.render(
  <Provider store={store}>  
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash} />
        <Route path="signout" component={Signout} />
        <Route path="get-started" component={GetStarted} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="results" component={Results} />
      </Route>
    </Router>
  </Provider>    
, document.querySelector('#root'));

