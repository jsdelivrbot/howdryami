import React from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { View } from '../../particles';
import { Header, Paragraph, Button } from '../../components';

import './welcome.css';

const Welcome = props => {
  const { history } = props;

  return (
    <View className="Welcome">
      <Header>Hi there!</Header>
      <Paragraph>You know that fine line between being tipsy and being stupid-ass-drunk?</Paragraph>
      <Paragraph>This app helps you know when to shold concider stop drinking in order to
        still have a good time and not making a complete ass of yourself.
      </Paragraph>
      <Button type={Button.SUBMIT} onClick={() => history.push('register')}>Join in</Button>
    </View>
  );
};

Welcome.propTypes = {
  history: PT.object.isRequired,
};

export default withRouter(Welcome);
