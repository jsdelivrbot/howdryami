import React from 'react';
import PT from 'prop-types';

const Text = props => (
  <div className={props.className}>{props.children}</div>
);

Text.propTypes = {
  children: PT.any,
  className: PT.string,
};

Text.defaultProps = {
  children: '',
  className: '',
};

export default Text;
