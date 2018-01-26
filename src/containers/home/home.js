import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';
import { userSelectors, userOperations } from '../../ducks/user';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './home.css';

class Home extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <View>
        <Header>Home</Header>
      </View>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  {}
);

export { Home as TestHome };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
