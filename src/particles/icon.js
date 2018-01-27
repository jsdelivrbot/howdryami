import React from 'react';
import PT from 'prop-types';
import classname from 'classname';

const Icon = props => {
  const iconClass = classname({ iconClass: true, [props.className]: true });

  return (
    <div className={iconClass} style={{ backgroundImage: props.image }}>{props.children}</div>
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
