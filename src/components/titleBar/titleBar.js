import React from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';
import { View, Touchable, Icon } from '../../particles';

import { ArrowLeft, MenuIcon } from '../icons';

import './titleBar.css';

const TitleBar = props => {
  const { disableBack, label } = props;

  return (
    <View className="titleBar">
      <View className="titleBar__backButton">
        {!disableBack && <Touchable onTouchEnd={() => props.history.go(-1)}><Icon image={ArrowLeft} /></Touchable> }
      </View>
      <View className="titleBar__label">{ label }</View>
      <View className="titleBar__menuButton">
        <Touchable><Icon image={MenuIcon} /></Touchable>
      </View>
    </View>
  );
};

TitleBar.propTypes = {
  history: PT.object.isRequired,
  label: PT.string.isRequired,
  disableBack: PT.bool,
};

TitleBar.defaultProps = {
  disableBack: false,
};

export default withRouter(TitleBar);
