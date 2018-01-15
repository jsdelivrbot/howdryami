/* eslint-disable */

import React from 'react';
import Stepper from './stepper';

describe('Test that the stepper', () => {
  test('renders without crashing', () => {
    const output = shallow(
      <Stepper />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })

  test('calls function on step up', () => {
    const mockOptions = [{ key:'FOO', value: 'Foo' }, { key:'BAR', value: 'Bar' }];

    const stepper = shallow(
      <Stepper options={mockOptions}/>
    );

    expect(stepper.state().currentSelectedOptionIndex).toEqual(0);
    stepper.instance().step(1);
    expect(stepper.state().currentSelectedOptionIndex).toEqual(1);
  })
});

