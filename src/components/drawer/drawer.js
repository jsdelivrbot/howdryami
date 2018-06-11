import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classname';
import { uiSelectors, uiOperations } from '../../ducks/ui';

import { MenuIcon } from '../icons';
import { View, Touchable, Icon, Text } from '../../particles';

import './drawer.css';

class Drawer extends Component {
  itemClicked = () => {
    console.log('clicked');
  }

  render() {
    const { isDrawerOpen, closeDrawer } = this.props;

    const cl = classNames({
      drawer: true,
      'drawer--open': isDrawerOpen,
    });

    return (
      <View className={cl}>
        <View className="drawer__closebutton">
          <Touchable onTouchEnd={closeDrawer}><Icon image={MenuIcon} /></Touchable>
        </View>
        <View className="drawer__item">
          <Touchable onTouchEnd={this.itemClicked} ><Icon image={MenuIcon} /><Text>Some text</Text></Touchable>
        </View>
      </View>
    );
  }
}

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
