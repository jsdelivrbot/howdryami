import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';
import { userSelectors, userOperations } from '../../ducks/user';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  componentWillMount() {
    this.setState({ localUser: { ...this.props.user } });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ localUser: { ...nextProps.user } });
  }

  registerHandler = () => {
    this.props.registerUser(this.state.localUser);
    this.props.history.push('home');
  };

  updateField = (fieldName, value) => {
    const { localUser } = this.state;
    localUser[fieldName] = value;
    this.setState({ localUser });
  };

  render() {
    const { genderList } = this.props;
    const { localUser } = this.state;
    const { registerHandler } = this;


    return Object.keys(this.props.user).length > 0 ? (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <Stepper
          label="gender"
          value={localUser.gender}
          stepList={genderList}
          fieldName="gender"
          onUpdate={this.updateField}
        />
        <Stepper
          label="age"
          startIndex={30}
          clampRange={[18, 120]}
          value={localUser.age}
          unit="yrs"
          fieldName="age"
          onUpdate={this.updateField}
        />
        <Stepper
          label="weight"
          startIndex={70}
          clampRange={[40, 250]}
          value={localUser.weight}
          unit="kg"
          fieldName="weight"
          onUpdate={this.updateField}
        />
        <Stepper
          label="height"
          startIndex={170}
          clampRange={[20, 250]}
          value={localUser.height}
          unit="cm"
          fieldName="height"
          onUpdate={this.updateField}
        />
        <Button type={Button.SUBMIT} onClick={registerHandler}>Register</Button>
      </View>
    ) : null;
  }
}

Register.propTypes = {
  genderList: PT.array,
  user: PT.object.isRequired,
  registerUser: PT.func.isRequired,
  history: PT.object.isRequired,
};

Register.defaultProps = {
  genderList: [],
};

const mapStateToProps = state => ({
  genderList: uiSelectors.genderListSelector(state),
  user: userSelectors.allUser(state),
});

const mapDispatchToProps = dispatch => (
  {
    registerUser: user => dispatch(userOperations.registerUser(user)),
  }
);

export { Register as TestRegister };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
