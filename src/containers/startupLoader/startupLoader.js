import React from 'react';
import { withRouter } from 'react-router-dom';

import { View, Icon } from '../../particles';
import { LoadLogo } from '../../components/icons';

import './startupLoader.css';

const StartupLoader = () => (
  (
    <View className="startupLoader">
      <Icon image={LoadLogo} className="loader__logo" />
    </View>
  )
);

export default withRouter(StartupLoader);
