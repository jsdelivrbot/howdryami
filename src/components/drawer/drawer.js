import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classname';
import { uiSelectors, uiOperations } from '../../ducks/ui';

import { MenuIcon } from '../icons';
import { View, Touchable, Icon } from '../../particles';

import './drawer.css';

const Drawer = props => {
  const { isDrawerOpen, closeDrawer } = props;

  console.log(isDrawerOpen)
  const cl = classNames({
    drawer: true,
    'drawer--open': isDrawerOpen,
  });

  return (
    <View className={cl}>
      <Touchable onTouchEnd={closeDrawer}><Icon image={MenuIcon} /></Touchable>
    </View>
  );
};

Drawer.propTypes = {
  closeDrawer: PT.func.isRequired,
  isDrawerOpen: PT.bool,
}

Drawer.defaultProps = {
  isDrawerOpen: true,
}

const mapStateToProps = state => ({
  isDrawerOpen: uiSelectors.drawerSelector(state).isDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(uiOperations.toggleDrawer()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drawer));
