import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Button from '../button/button';

import { uiSelectors } from '../../ducks/ui';

import './confirm.css';

class Confirm extends Component {
  render () {
    const { text, confirmCallback, cancelCallback, isVisible } = this.props;
    console.log(this.props)
    return (
      <Modal isOpen={ isVisible } className="confirm__container" overlayClassName="confirm__background" >
        <div className="confirm__content">
          <div className="confirm__content__text">{text}</div>
          <div className="confirm__button__container">
            <Button className="confirm__button" onTouchStart={confirmCallback} onTouchEnd={cancelCallback}>yes</Button>
            <Button className="confirm__button">No</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  text: PT.string,
  confirmCallback: PT.func,
  cancelCallback: PT.func,
  isVisible: PT.bool,
};

Confirm.defaultProps = {
  isVisible: true,
  text: 'Are you sure you want to delete this?',
  confirmCallback: () => {},
  cancelCallback: () => {},
};

const mapStateToProps = state => ({
  text: uiSelectors.confirmModalOptionsSelector(state).text,
  confirmCallback: uiSelectors.confirmModalOptionsSelector(state).confirmCallback,
  cancelCallback: uiSelectors.confirmModalOptionsSelector(state).cancelCallback,
  isVisible: uiSelectors.confirmModalOptionsSelector(state).isVisible,
});

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
