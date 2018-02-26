import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Button from '../button/button';

import { uiSelectors } from '../../ducks/ui';

class Confirm extends Component {
  render () {
    const { title, body, confirmOKHandler, confirmCancelHandler, confirmVisible } = this.props;
    return (
      <Modal>
        <div className="confirm__box">
          <div className="confirm__box__body">The body</div>
          <Button />
          <Button />
        </div>
        <div className="confirm__background"></div>
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
  text: '',
  confirmCallback: () => {},
  cancelCallback: () => {},
};

const mapStateToProps = state => ({
  text: uiSelectors.confirmModalOptionsSelector(state).text,
  confirmCallback: uiSelectors.confirmModalOptionsSelector(state).text,
  cancelCallback: uiSelectors.confirmModalOptionsSelector(state).text,
  isVisible: uiSelectors.confirmModalOptionsSelector(state).text,
});

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
