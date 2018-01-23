/* eslint-disable */
import React from 'react';
import { TestRegister } from './register';

describe('renders without crashing', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(
      <TestRegister user={{gender:'MALE',age:33,height:100,weight:100}} registerUser={() => {}} />
    );
  })
});
