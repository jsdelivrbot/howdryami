import React from 'react';
import PT from 'prop-types';
import classname from 'classname';

import './icon.css';

const Icon = props => {
  const iconClass = classname({ icon__default: true, [props.className]: true });

  return (
    <div className={iconClass} style={{ backgroundImage: `url(${props.image})` }}>{props.children}</div>
  );
};

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
