import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './register.css';

class Register extends Component {
  render() {
    const { genderList } = this.props;
    return (
      <View className="Register">
        <Header>Register</Header>
        <Paragraph>To get for a correct-ish calculation of your Blood Alcohol Content (BAC), please swipe and set your correct body stats.</Paragraph>
        <Stepper options={genderList} />
        <Button type={Button.SUBMIT} onClick={() => console.log('clicked')}>Register</Button>
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


export default connect(mapStateToProps)(Register);
