import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import classname from 'classname';

import { View, Icon } from '../../particles';
import Button from '../button/button';

import * as Icons from '../icons';

import './diaryListItem.css';

class DiaryListItem extends Component {
  state = {
    editDeleteIsVisible: false,
  }

  toggleEditdeletevisibility = () => {
    console.log('toggle')
    this.setState({ editDeleteIsVisible: !this.state.editDeleteIsVisible });
  }

  render() {
    const { label, time, icon } = this.props.diaryItem;
    const { toggleEditdeleteVisibility } = this;
    const { editClickHandler, deleteClickHandler } = this.props;
    const { editDeleteIsVisible } = this.state;

    const editdeleteVisibilityStyleClasses = classname({
      editdelete__container: true,
      'editdelete__container--visible': editDeleteIsVisible,
    });

    return (
      <View className="diarylist__item" onClick={this.toggleEditdeletevisibility}>
        <Icon className="item__icon" image={Icons.getIconById(icon)} />
        <View className="item__label">{label}</View>
        <time className="item__time">{moment(time).format('HH:mm')}</time>
        <View className={editdeleteVisibilityStyleClasses}>
          <Button className="item__edit" onClick={editClickHandler} type={Button.REGULAR} />
          <Button className="item__delete" onClick={deleteClickHandler} type={Button.REGULAR} />
        </View>
      </View>
    );
  }
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
