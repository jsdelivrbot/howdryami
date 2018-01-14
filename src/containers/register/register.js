import React, { Component } from 'react';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  state = {
    stepOptions: [60, 61, 61, 63, 64, 65, 66, 67, 68],
  }
  render() {
    return (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <Stepper options={this.state.stepOptions} />
        <Button type={Button.SUBMIT} onClick={() => console.log('clicked')}>Register</Button>
      </View>
    );
  }
}

export default Register;
