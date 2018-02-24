import React from 'react';
import PT from 'prop-types';

import { View } from '../../particles';

import DiaryListItem from './diaryListItem';

import './diaryList.css';

const uuid = require('uuid/v4');


const DiaryList = props => {
  const { diaryEntries } = props;

  return (
    <View className="diarylist">
      { diaryEntries.map(entry => <DiaryListItem key={uuid()} id={uuid()} diaryItem={entry} />) }
    </View>
  );
};

DiaryList.propTypes = {
  diaryEntries: PT.array,
};

DiaryList.defaultProps = {
  diaryEntries: [],
};

export default DiaryList;
