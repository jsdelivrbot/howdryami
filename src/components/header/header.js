import React from 'react';
import PT from 'prop-types';

import { Text } from '../../particles';

import './header.css';

const Header = props => (
  <h1 className="header">{props.children}</h1>
);

Header.propTypes = {
  children: PT.any,
};

Header.defaultProps = {
  children: '',
};

const SubHeader = props => (
  <h1 className="subHeader">{props.children}</h1>
);

SubHeader.propTypes = {
  children: PT.any,
};

SubHeader.defaultProps = {
  children: '',
};

export { Header, SubHeader };
