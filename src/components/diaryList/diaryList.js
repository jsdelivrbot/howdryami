import React, { Component } from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import { View } from '../../particles';

import DiaryListItem from './diaryListItem';

import './diaryList.css';

const uuid = require('uuid/v4');


class DiaryList extends Component {
  editEntryHandler = id =>
    this.props.history.push(`diaryEntry/${id}`)


  render() {
    const { diaryEntries } = this.props;
    const { editEntryHandler } = this;

    return (
      <View className="diarylist">
        { diaryEntries.map(entry => (<DiaryListItem
          key={uuid()}
          id={uuid()}
          diaryItem={entry}
          editClickHandler={editEntryHandler}
        />)) }
      </View>
    );
  }
}

DiaryList.propTypes = {
  history: PT.object.isRequired,
  diaryEntries: PT.array,
};

DiaryList.defaultProps = {
  diaryEntries: [],
};

export default withRouter(DiaryList);
