import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import PT from 'prop-types';

import { uiSelectors } from '../../ducks/ui';
import { userSelectors, userOperations } from '../../ducks/user';
import { diarySelectors } from '../../ducks/diary';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './home.css';

class Home extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    console.log(this.props.entriesPast24hours);

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
  entriesPast24hours: PT.array,
};

Home.defaultProps = {
  entriesPast24hours: [],
};

const mapStateToProps = state => ({
  entriesPast24hours: diarySelectors.entriesPast24hours(state),
});

const mapDispatchToProps = dispatch => (
  {}
);

export { Home as TestHome };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
