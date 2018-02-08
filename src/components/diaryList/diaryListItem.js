import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Icon } from '../../particles';
import * as Icons from '../icons';

import './diaryListItem.css';

const DiaryListItem = props => {
  const { label, time, icon } = props.diaryItem;

  return (
    <View className="diarylist__item">
      <Icon className="item__icon" image={Icons.getIconById(icon)} />
      <View className="item__label">{label}</View>
      <time className="item__time">{moment(time).format('HH:mm')}</time>
    </View>
  );
};

DiaryListItem.propTypes = {
  diaryItem: PT.object.isRequired,
};

DiaryListItem.defaultProps = {
}

const mapStateToProps = store => ({
});

export default connect(mapStateToProps)(DiaryListItem);
