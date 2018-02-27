import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Button from '../button/button';

import { uiSelectors } from '../../ducks/ui';

import './confirm.css';

const Confirm = props => {
  const {
    text, confirmCallback, cancelCallback, isVisible,
  } = props;

  return (
    <Modal isOpen={isVisible} className="confirm__container" overlayClassName="confirm__background" >
      <div className="confirm__content">
        <div className="confirm__content__text">{text}</div>
        <div className="confirm__button__container">
          <Button className="confirm__button" onTouchStart={confirmCallback}>yes</Button>
          <Button className="confirm__button" onTouchStart={cancelCallback}>No</Button>
        </div>
      </div>
    </Modal>
  );
};

Confirm.propTypes = {
  text: PT.string,
  confirmCallback: PT.func,
  cancelCallback: PT.func,
  isVisible: PT.bool,
};

Confirm.defaultProps = {
  isVisible: false,
  text: '',
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
