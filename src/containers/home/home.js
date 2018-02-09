import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { diarySelectors } from '../../ducks/diary';

import { View } from '../../particles';
import { Header } from '../../components';
import DiaryList from '../../components/diaryList/diaryList';
import DiarySummary from '../../components/diarySummary/diarySummary';

import './home.css';

class Home extends Component {
  render() {
    const { entriesPast24hours, bacRightNow } = this.props;

    return (
      <View>
        <Header>Home</Header>
        <DiarySummary
          addItemToDiaryHandler={() => this.props.history.push('diaryentry')}
          bac={bacRightNow}
        />
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
  bacRightNow: PT.number,
};

Home.defaultProps = {
  entriesPast24hours: [],
  bacRightNow: 0,
};

const mapStateToProps = state => ({
  entriesPast24hours: diarySelectors.entriesPast24hours(state),
  bacRightNow: diarySelectors.bacRightNow(state),
});

const mapDispatchToProps = dispatch => (
  {}
);

export { Home as TestHome };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
