import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import HomePage from './HomePage';
import OtherComponent from './OtherComponent';
import OtherComponentWithId from './OtherComponentWithId';
import Error404 from './Error404';
import './index.css';

const Root = () => (
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/other/" component={OtherComponent} />
        <Route exact path="/other/:id" component={OtherComponentWithId} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </App>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
