import React from 'react';
import PT from 'prop-types';

const Icon = props => (
  <div className={props.className} image={props.image}>{props.children}</div>
);

Icon.propTypes = {
  children: PT.node,
  className: PT.string,
  image: PT.node.isRequired,
};

Icon.defaultProps = {
  children: '',
  className: '',
};

export default Icon;
