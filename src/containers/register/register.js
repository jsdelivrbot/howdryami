import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';
import { userSelectors, userOperations } from '../../ducks/user';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  state = { user: {} };

  registerHandler = () => {
    this.props.registerUser(this.state.user);
  };

  updateField = (fieldName, value) => {
    const { user } = this.state;
    user[fieldName] = value;
    this.setState({ user });
  };

  render() {
    const { genderList, user } = this.props;
    const { registerHandler } = this;

    return (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <Stepper
          label="gender"
          value={user.gender}
          stepList={genderList}
          fieldName="gender"
          onUpdate={this.updateField}
        />
        <Stepper
          label="age"
          startIndex={30}
          clampRange={[18, 120]}
          value={user.age}
          unit="yrs"
          fieldName="age"
          onUpdate={this.updateField}
        />
        <Stepper
          label="weight"
          startIndex={70}
          clampRange={[40, 250]}
          value={user.weight}
          unit="kg"
          fieldName="weight"
          onUpdate={this.updateField}
        />
        <Stepper
          label="height"
          startIndex={170}
          clampRange={[20, 250]}
          value={user.height}
          unit="cm"
          fieldName="height"
          onUpdate={this.updateField}
        />
        <Button type={Button.SUBMIT} onClick={registerHandler}>Register</Button>
      </View>
    );
  }
}

Register.propTypes = {
  genderList: PT.array,
  user: PT.object.isRequired,
  registerUser: PT.func.isRequired,
};

Register.defaultProps = {
  genderList: [],
};

const mapStateToProps = state => ({
  genderList: uiSelectors.genderListSelector(state),
  user: {
    age: userSelectors.age(state),
    weight: userSelectors.weight(state),
    height: userSelectors.height(state),
    gender: userSelectors.gender(state),
  },
});

const mapDispatchToProps = dispatch => (
  {
    registerUser: user => dispatch(userOperations.registerUser(user)),
  }
);

export { Register as TestRegister };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
