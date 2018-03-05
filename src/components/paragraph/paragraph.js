import React from 'react';
import PT from 'prop-types';
import classname from 'classname';

import { Text } from '../../particles';

import './paragraph.css';

const Paragraph = props => {
  const { type, className } = props;
  const classNames = classname({
    paragraph: true,
    paragraph__intro: type === Paragraph.INTRO,
    paragraph__small: type === Paragraph.SMALL,
    [className]: true,
  });

  return (
    <Text className={classNames}>{props.children}</Text>
  );
};

Paragraph.INTRO = 'intro';
Paragraph.REGULAR = 'regular';
Paragraph.SMALL = 'small';

Paragraph.propTypes = {
  children: PT.any,
  type: PT.string,
  className: PT.string,
};

Paragraph.defaultProps = {
  children: '',
  type: Paragraph.REGULAR,
  className: '',
};

export default Paragraph;
