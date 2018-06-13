import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PT from 'prop-types';

import StartupLoader from './startupLoader/startupLoader';
import Welcome from './welcome/welcome';
import Register from './register/register';
import Home from './home/home';
import DiaryEntry from './diaryEntry/diaryEntry';
import Confirm from '../components/confirm/confirm';
import Drawer from '../components/drawer/drawer';

import { loadUIData } from '../startup';

import { userType } from '../ducks/user';

import './App.css';

class App extends Component {
  componentWillMount() {
    const { dispatch, history } = this.props;
    loadUIData(dispatch).then(result => {
      if (this.props.location.pathname === '/') {
        const nextRoute = result.includes(userType.USER_HYDRATION_EMPTY) ? '/welcome' : '/home';
        setTimeout(() => history.push(nextRoute), 3000);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Confirm />
        <Drawer />
        <Route exact path="/" component={StartupLoader} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diaryentry" component={DiaryEntry} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PT.func.isRequired,
  history: PT.object.isRequired,
  location: PT.object.isRequired,
};

export default withRouter(connect()(App));
