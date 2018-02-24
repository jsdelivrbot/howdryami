import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Icon } from '../../particles';
import Button from '../button/button';

import * as Icons from '../icons';

import './diaryListItem.css';

const DiaryListItem = props => {
  const { label, time, icon } = props.diaryItem;
  const { editClickHandler, deleteClickHandler } = props;

  return (
    <View className="diarylist__item">
      <Icon className="item__icon" image={Icons.getIconById(icon)} />
      <View className="item__label">{label}</View>
      <time className="item__time">{moment(time).format('HH:mm')}</time>
      <View className="editdelete__container">
        <Button className="item__edit" onClick={editClickHandler} type={Button.REGULAR} />
        <Button className="item__delete" onClick={deleteClickHandler} type={Button.REGULAR} />
      </View>
    </View>
  );
};

DiaryListItem.propTypes = {
  diaryItem: PT.object.isRequired,
  editClickHandler: PT.func.isRequired,
  deleteClickHandler: PT.func.isRequired,
};

DiaryListItem.defaultProps = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
  editClickHandler: () => console.log('editclick'),
  deleteClickHandler: () => console.log('deleteclick'),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryListItem);
