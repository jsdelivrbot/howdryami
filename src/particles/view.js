import React from 'react';
import PT from 'prop-types';

const View = props => (
  <div>{props.children}</div>
);

View.propTypes = {
  children: PT.node,
};

View.defaultProps = {
  children: '',
};

export default View;
