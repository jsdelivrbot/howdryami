import React from 'react';
import PT from 'prop-types';

const Touchable = props => {
  const { children, onTouchStart, onTouchEnd } = props;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="button"
    >
      {children}
    </div>
  );
};

Touchable.propTypes = {
  children: PT.node.isRequired,
  onTouchStart: PT.func,
  onTouchEnd: PT.func,
};

Touchable.defaultProps = {
  onTouchStart: () => {},
  onTouchEnd: () => {},
};

export default Touchable;
