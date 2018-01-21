import React from 'react';
import PT from 'prop-types';
import classname from 'classname';

import './button.css';

const Button = props => {
  const { type, className } = props;
  const allClassNames = classname({
    button: true,
    'button--regular': type === Button.REGULAR,
    'button--submit': type === Button.SUBMIT,
    [className]: true,
  });

  return (
    <button
      onClick={props.onClick}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
      className={allClassNames}
    >{props.children}
    </button>
  );
};

Button.REGULAR = 'button/REGULAR';
Button.SUBMIT = 'button/SUBMIT';

Button.propTypes = {
  children: PT.any,
  onClick: PT.func,
  onTouchStart: PT.func,
  onTouchEnd: PT.func,
  type: PT.oneOf([Button.REGULAR, Button.SUBMIT]),
  className: PT.string,
};

Button.defaultProps = {
  children: '',
  type: Button.REGULAR,
  onTouchStart: () => {},
  onTouchEnd: () => {},
  onClick: () => {},
  className: '',
};

export default Button;
