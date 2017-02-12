import React from 'react';
import ReactDOM from 'react-dom';

import Signin from './auth/components/signin';
import Signup from './auth/components/signup';
import Signout from './auth/components/signout';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash';
// import Dashboard from './dashboard/components/index';

// import store from './store'; 

//   <Provider store={store}>
//   </Provider>
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
, document.querySelector('#root'));

