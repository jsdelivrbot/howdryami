import React from 'react';
import PT from 'prop-types';

const View = props => (
  <div
    className={props.className}
    onClick={props.onClick}
    onKeyPress={props.onClick}
  >
    {props.children}
  </div>
);

View.propTypes = {
  children: PT.node,
  className: PT.string,
  onClick: PT.func,
};

View.defaultProps = {
  children: '',
  className: '',
  onClick: () => {},
};

export default View;
