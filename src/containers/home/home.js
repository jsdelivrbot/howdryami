import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

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
        <Button onClick={() => this.props.history.push('diaryentry')}>+</Button>
      </View>
    );
  }
}

Home.propTypes = {
  history: PT.object.isRequired,
};

Home.defaultProps = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  {}
);

export { Home as TestHome };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
