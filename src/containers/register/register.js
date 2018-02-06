import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';
import { userSelectors, userOperations } from '../../ducks/user';

import { View } from '../../particles';
import { Header, Paragraph, ListStepper, RangeStepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  registerHandler = e => {
    e.preventDefault();

    if (e.target.dataset.role === 'register') {
      this.props.registerUser({ ...this.props.formUser });
      this.props.history.push('home');
    }
  };

  updateField = (fieldName, value) => {
    const { localUser } = this.state;
    localUser[fieldName] = value;
    this.setState({ localUser });
  };

  render() {
    const { genderList } = this.props;
    const { registerHandler } = this;


    return Object.keys(this.props.user).length > 0 ? (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <form onSubmit={registerHandler}>
          <ListStepper
            label="gender"
            stepList={genderList}
            fieldName="gender"
            onUpdate={this.updateField}
          />
          <RangeStepper
            label="age"
            clampRange={[18, 120]}
            unit="yrs"
            fieldName="age"
            onUpdate={this.updateField}
          />
          <RangeStepper
            label="weight"
            clampRange={[40, 250]}
            unit="kg"
            fieldName="weight"
            onUpdate={this.updateField}
          />
          <RangeStepper
            label="height"
            clampRange={[20, 250]}
            unit="cm"
            fieldName="height"
            onUpdate={this.updateField}
          />
          <Button dataRole="register" type={Button.SUBMIT} onClick={registerHandler}>Register</Button>
        </form>
      </View>
    ) : null;
  }
}

Register.propTypes = {
  genderList: PT.array,
  user: PT.object.isRequired,
  formUser: PT.object,
  registerUser: PT.func.isRequired,
  history: PT.object.isRequired,
};

Register.defaultProps = {
  genderList: [],
  formUser: {},
};

const mapStateToProps = state => ({
  genderList: uiSelectors.genderListSelector(state),
  user: userSelectors.allUser(state),
  formUser: getFormValues('userRegistrationForm')(state),
  initialValues: userSelectors.allUser(state),
});

const mapDispatchToProps = dispatch => (
  {
    registerUser: user => dispatch(userOperations.registerUser(user)),
  }
);

const formOptions = {
  form: 'userRegistrationForm',
  enableReinitialize: true,
};

export { Register as TestRegister };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm(formOptions)((Register))));
