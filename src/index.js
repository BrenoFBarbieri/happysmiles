import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './screens/Home';
import Register from './screens/Register';
import About from './screens/About';

import { HashRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <React.StrictMode>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
      </React.StrictMode>
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root')
);
