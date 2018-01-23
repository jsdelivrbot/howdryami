/* eslint-disable */

import React from 'react';
import Stepper from './stepper';


describe('Test that the stepper', () => {
  let stepperProps;

  beforeEach(() => {
    stepperProps = {
      stepList: [{ key:'FOO', value: 'Foo' }, { key:'BAR', value: 'Bar' }],
      value:"FOO",
      fieldName:"acme",
      onUpdate: () => {},
    }
  });

  test('renders without crashing', () => {
    const output = shallow(
      <Stepper  { ...stepperProps } />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })

  test('calls function on step up', () => {

    const stepper = shallow(
      <Stepper { ...stepperProps } />
    );

    expect(stepper.state().currentStepIndex).toEqual(0);
    stepper.instance().stepOnce(1);
    expect(stepper.state().currentStepIndex).toEqual(1);
  })
});

