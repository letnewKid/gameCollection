import React from 'react';
import { hot } from 'react-hot-loader';
import UserContainer from './UserContainer';

const App = () => (
  <div id="app">
    <UserContainer />
  </div>
);
export default hot(module)(App);
