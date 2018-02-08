import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { diarySelectors } from '../../ducks/diary';

import { View } from '../../particles';
import { Header, Button } from '../../components';
import DiaryList from '../../components/diaryList/diaryList';

import './home.css';

class Home extends Component {
  render() {
    const { entriesPast24hours } = this.props;

    return (
      <View>
        <Header>Home</Header>
        <Button onClick={() => this.props.history.push('diaryentry')}>+</Button>
        <DiaryList
          diaryEntries={entriesPast24hours}
        />
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
