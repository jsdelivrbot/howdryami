import React from 'react';
import { Route } from 'react-router-dom';

import StartupLoader from './startupLoader/startupLoader';
import Welcome from './welcome/welcome';
import Register from './register/register';
import Home from './home/home';
import DiaryEntry from './diaryEntry/diaryEntry';
import Confirm from '../components/confirm/confirm';

import './App.css';

const App = () => (
  <div className="App">
    <Confirm />
    <Route exact path="/" component={StartupLoader} />
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/diaryentry" component={DiaryEntry} />
  </div>
);

export default App;
