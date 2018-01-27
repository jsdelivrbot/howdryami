/* eslint-disable */
import React from 'react';
import { TestHome } from './home';

describe('renders without crashing', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <TestHome history={{}} />
    );
  })
});
