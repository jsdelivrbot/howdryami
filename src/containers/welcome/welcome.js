import React, { Component } from 'react';

import { Header } from '../../components/header';
import { Paragraph } from '../../components/paragraph';
import { Button } from '../../components/button';

import './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Header>Welcome</Header>
        <Paragraph>You know that fine line where you’re tipsy but still in control and having a good time?</Paragraph>
        <Paragraph>This app helps you know when to grab that next drink to keep you in your happy-tipsy place.</Paragraph>
        <Button>Join in</Button>
      </div>
    );
  }
}

export default Welcome;
