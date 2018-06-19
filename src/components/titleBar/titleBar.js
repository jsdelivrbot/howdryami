import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { uiOperations } from '../../ducks/ui';
import { View, Touchable, Icon } from '../../particles';

import { ArrowLeft, MenuIcon } from '../icons';

import './titleBar.css';

const TitleBar = props => {
  const { disableBack, label, openDrawer } = props;

  return (
    <View className="titleBar__wrapper">
      <View className="titleBar">
        <View className="titleBar__backButton">
          {!disableBack && <Touchable onTouchEnd={() => props.history.go(-1)}><Icon image={ArrowLeft} /></Touchable> }
        </View>
        <View className="titleBar__label">{ label }</View>
        <View className="titleBar__menuButton">
          <Touchable onTouchEnd={openDrawer}><Icon image={MenuIcon} /></Touchable>
        </View>
      </View>
    </View>
  );
};

TitleBar.propTypes = {
  openDrawer: PT.func.isRequired,
  history: PT.object.isRequired,
  label: PT.string.isRequired,
  disableBack: PT.bool,
};

TitleBar.defaultProps = {
  disableBack: false,
};

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(uiOperations.toggleDrawer()),
});

export default withRouter(connect(null, mapDispatchToProps)(TitleBar));
