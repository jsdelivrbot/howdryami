import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classname';
import { uiSelectors, uiOperations } from '../../ducks/ui';

import * as Icons from '../icons';
import { View, Touchable, Icon, Text } from '../../particles';

import './drawer.css';

class Drawer extends Component {
  diaryClickHandler = () => {
    this.props.closeDrawer();
    this.props.history.push('/home');
  };

  profileClickHandler = () => {
    this.props.closeDrawer();
    this.props.history.push('/profile');
  };

  nukeClickHandler = () => {
    this.props.closeDrawer();
  };

  privacyClickHandler = () => {
    this.props.closeDrawer();
    this.props.history.push('/privacy');
  };

  render() {
    const { isDrawerOpen, closeDrawer } = this.props;

    const cl = classNames({
      drawer: true,
      'drawer--open': isDrawerOpen,
    });

    return (
      <View className={cl}>
        <View className="drawer__closebutton">
          <Touchable onTouchEnd={closeDrawer}><Icon image={Icons.Close} /></Touchable>
        </View>
        <View className="drawer__item">
          <Touchable onTouchEnd={this.diaryClickHandler} ><Icon image={Icons.Book} /><Text className="item__text">Your diary</Text></Touchable>
        </View>
        <View className="drawer__item">
          <Touchable onTouchEnd={this.profileClickHandler} ><Icon image={Icons.Person} /><Text className="item__text">Your profile</Text></Touchable>
        </View>
        <View className="drawer__item">
          <Touchable onTouchEnd={this.nukeClickHandler} ><Icon image={Icons.Nuke} /><Text className="item__text">Wipe all data</Text></Touchable>
        </View>
        <View className="drawer__item">
          <Touchable onTouchEnd={this.privacyClickHandler} ><Icon image={Icons.Shield} /><Text className="item__text">Your privacy</Text></Touchable>
        </View>
      </View>
    );
  }
}

Drawer.propTypes = {
  closeDrawer: PT.func.isRequired,
  isDrawerOpen: PT.bool,
  history: PT.object.isRequired,
};

Drawer.defaultProps = {
  isDrawerOpen: false,
};

const mapStateToProps = state => ({
  isDrawerOpen: uiSelectors.drawerSelector(state).isDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(uiOperations.toggleDrawer()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drawer));
