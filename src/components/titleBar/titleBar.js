import React, { Component } from 'react';
import { View, Touchable, Icon } from '../../particles';

import { ArrowLeft } from '../icons';

import './titleBar.css';

const TitleBar = () => (
  <View className="titleBar">
    <Touchable><Icon image={ArrowLeft} /></Touchable>
    <View>some header here</View>
    <Touchable><View /></Touchable>
  </View>
);

export default TitleBar;
