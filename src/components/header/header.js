import React from 'react';
import PT from 'prop-types';

import { Text } from '../base';

import './header.css';

const Header = props => (
  <Text className="header">{props.children}</Text>
);

Header.propTypes = {
  children: PT.any,
};

Header.defaultProps = {
  children: '',
};

export default Header;
