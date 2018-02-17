import React from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { View } from '../../particles';
import { Header, Paragraph, Button } from '../../components';

import './welcome.css';

const Welcome = props => {
  const { history } = props;

  return (
    <View className="Welcome there!">
      <Header>Welcome!</Header>
      <Paragraph>You know that fine line where you’re tipsy but still in control and having a good time?</Paragraph>
      <Paragraph>This app helps you know when to grab that next drink to keep you in your happy-tipsy place.</Paragraph>
      <Button onClick={() => history.push('register')}>Join in</Button>
    </View>
  );
};

Welcome.propTypes = {
  history: PT.object.isRequired,
};

export default withRouter(Welcome);
