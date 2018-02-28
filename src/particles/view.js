import React from 'react';
import PT from 'prop-types';

const View = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

View.propTypes = {
  children: PT.node,
  className: PT.string,
};

View.defaultProps = {
  children: '',
  className: '',
};

export default View;
