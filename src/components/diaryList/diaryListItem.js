import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import classname from 'classname';

import { View, Icon } from '../../particles';
import Button from '../button/button';

import { uiSelectors, uiOperations } from '../../ducks/ui';

import * as Icons from '../icons';

import './diaryListItem.css';

const DiaryListItem = props => {
  const { label, time, icon } = props.diaryItem;
  const { id, diaryEditContainerToShow, toggleDiaryEditContainer } = props;
  const { editClickHandler, deleteClickHandler } = props;

  const editdeleteVisibilityStyleClasses = classname({
    editdelete__container: true,
    'editdelete__container--visible': diaryEditContainerToShow === id,
  });

  return (
    <View className="diarylist__item" onClick={() => toggleDiaryEditContainer(id)}>
      <Icon className="item__icon" image={Icons.getIconById(icon)} />
      <View className="item__label">{label}</View>
      <time className="item__time">{moment(time).format('HH:mm')}</time>
      <View className={editdeleteVisibilityStyleClasses}>
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
  id: PT.string.isRequired,
  diaryEditContainerToShow: PT.string,
  toggleDiaryEditContainer: PT.func.isRequired,
};

DiaryListItem.defaultProps = {
  diaryEditContainerToShow: '',
};

const mapStateToProps = state => ({
  diaryEditContainerToShow: uiSelectors.diaryEditContainerToShowSelector(state),
});

const mapDispatchToProps = dispatch => ({
  editClickHandler: () => console.log('editclick'),
  deleteClickHandler: () => console.log('deleteclick'),
  toggleDiaryEditContainer: id => dispatch(uiOperations.toggleDiaryEditContainer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryListItem);
