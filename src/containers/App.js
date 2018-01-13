import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Welcome from './welcome/welcome';
import Register from './register/register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
