import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import classname from 'classname';

import { View, Icon, Touchable } from '../../particles';
import Button from '../button/button';

import { uiSelectors, uiOperations } from '../../ducks/ui';
import { diaryOperations } from '../../ducks/diary';

import * as Icons from '../icons';

import './diaryListItem.css';

const DiaryListItem = props => {
  const {
    id, label, time, icon,
  } = props.diaryItem;
  const { diaryEditContainerToShow, toggleDiaryEditContainer } = props;
  const { editClickHandler, deleteClickHandler } = props;

  const editdeleteVisibilityStyleClasses = classname({
    editdelete__container: true,
    'editdelete__container--visible': diaryEditContainerToShow === id,
  });

  return (
    <Touchable onTouchStart={() => toggleDiaryEditContainer(id)}>
      <View className="diarylist__item">
        <Icon className="item__icon" image={Icons.getIconById(icon)} />
        <View className="item__label">{label}</View>
        <time className="item__time">{moment(time).format('HH:mm')}</time>
        <View className={editdeleteVisibilityStyleClasses}>
          <Button className="item__edit" onTouchStart={() => editClickHandler(id)} type={Button.REGULAR} />
          <Button className="item__delete" onTouchStart={() => deleteClickHandler(id)} type={Button.REGULAR} />
        </View>
      </View>
    </Touchable>
  );
};

DiaryListItem.propTypes = {
  diaryItem: PT.object.isRequired,
  editClickHandler: PT.func.isRequired,
  deleteClickHandler: PT.func.isRequired,
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
  deleteClickHandler: id => dispatch(diaryOperations.deleteDiaryEntry(id)),
  toggleDiaryEditContainer: id => dispatch(uiOperations.toggleDiaryEditContainer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryListItem);
