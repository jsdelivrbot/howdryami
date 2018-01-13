import React from 'react';
import PT from 'prop-types';

import { Text } from '../../particles';

import './paragraph.css';

const Paragraph = props => (
  <Text className="paragraph">{props.children}</Text>
);

Paragraph.propTypes = {
  children: PT.any,
};

Paragraph.defaultProps = {
  children: '',
};

export default Paragraph;
