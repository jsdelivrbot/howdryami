import React from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { View, Icon } from '../../particles';
import { Header, Paragraph, Button } from '../../components';

import { GraphIllustration } from '../../components/icons';

import './welcome.css';

const Welcome = props => {
  const { history } = props;

  return (
    <View className="welcome">
      <Header>How dry am I!</Header>
      <Paragraph>
        Drinking is all fun and games, until it&#39;s not.
        This app helps you to stay in your happy zone, and to know when it&#39;s time for another one!
      </Paragraph>
      <Icon image={GraphIllustration} className="welcome__illustration" />
      <Button type={Button.SUBMIT} onClick={() => history.push('register')}>Get started!</Button>
      <Paragraph type={Paragraph.SMALL} className="welcome__gdpr">
        This app adheres to the new GDPR regulations. Read more how you&#39;re in control of your data.
      </Paragraph>
    </View>
  );
};

Welcome.propTypes = {
  history: PT.object.isRequired,
};

export default withRouter(Welcome);
