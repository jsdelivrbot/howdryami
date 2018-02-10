import React from 'react';
import PT from 'prop-types';

import { View } from '../../particles';
import { Button } from '../../components';

import './diarySummary.css';

const DiarySummary = props => {
  const { bac, addItemToDiaryHandler } = props;

  return (
    <View className="diarysummmary">
      <View className="summary__bac">{bac}‰</View>
      <View className="summary__estimatedlabel">estimated</View>
      <Button className="summary__additem" onClick={addItemToDiaryHandler} />
    </View>
  );
};

DiarySummary.propTypes = {
  bac: PT.number.isRequired,
  addItemToDiaryHandler: PT.func.isRequired,
};

export default DiarySummary;
