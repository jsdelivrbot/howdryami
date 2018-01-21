import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  registerHandler = () => {}

  render() {
    const { genderList } = this.props;
    const { registerHandler } = this;

    return (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <Stepper
          label="gender"
          startIndex={0}
          stepList={genderList}
        />
        <Stepper
          label="age"
          startIndex={30}
          clampRange={[18, 120]}
          unit="yrs"
        />
        <Stepper
          label="weight"
          startIndex={70}
          clampRange={[40, 250]}
          unit="kg"
        />
        <Stepper
          label="height"
          startIndex={170}
          clampRange={[20, 250]}
          unit="cm"
        />
        <Button type={Button.SUBMIT} onClick={registerHandler}>Register</Button>
      </View>
    );
  }
}

Register.propTypes = {
  genderList: PT.array,
};

Register.defaultProps = {
  genderList: [],
};

const mapStateToProps = state => ({
  genderList: uiSelectors.genderListSelector(state),
});

export { Register as TestRegister };
export default connect(mapStateToProps)(Register);
