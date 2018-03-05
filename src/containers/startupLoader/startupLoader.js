import React from 'react';
import { withRouter } from 'react-router-dom';

import { View, Icon } from '../../particles';
import { Paragraph } from '../../components';
import { LoadLogo } from '../../components/icons';

import './startupLoader.css';

const StartupLoader = () => (
  (
    <View className="startupLoader">
      <Icon image={LoadLogo} className="loader__logo" />
      <Paragraph type={Paragraph.INTRO} className="startupLoader__payoff">Know when to stop - and when to keep going!</Paragraph>
    </View>
  )
);

export default withRouter(StartupLoader);
