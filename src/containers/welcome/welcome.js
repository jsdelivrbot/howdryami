import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';

import './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Header>Welcome</Header>
        <Link to="/register">Go to register</Link>
      </div>
    );
  }
}

export default Welcome;
