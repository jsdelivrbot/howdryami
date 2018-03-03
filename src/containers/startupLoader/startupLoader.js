import React from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { View, Icon } from '../../particles';
import { LoadLogo } from '../../components/icons';

import './startupLoader.css';

const StartupLoader = props => {
  const { history } = props;

  return (
    <View className="startupLoader">
      <Icon image={LoadLogo} className="loader__logo" />
    </View>
  );
};

StartupLoader.propTypes = {
  history: PT.object.isRequired,
};

export default withRouter(StartupLoader);
