import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Welcome from './welcome/welcome';
import Register from './register/register';
import Home from './home/home';
import DiaryEntry from './diaryEntry/diaryEntry';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diaryentry" component={DiaryEntry} />
      </div>
    );
  }
}

export default App;
