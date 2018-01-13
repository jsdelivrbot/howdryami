import React from 'react';
import PT from 'prop-types';


import './button.css';

const Paragraph = props => (
  <button className="button">{props.children}</button>
);

Paragraph.propTypes = {
  children: PT.any,
};

Paragraph.defaultProps = {
  children: '',
};

export default Paragraph;
