/* eslint-disable */

import React from 'react';
import Stepper from './stepper';


describe('Test that the list stepper', () => {
  let stepperProps;

  beforeEach(() => {
    stepperProps = {
      stepList: [{ value:'BANANA', label: 'Banana' }, { value:'ORANGE', label: 'Orange' }, { value:'KIWI', label: 'Kiwi' }],
      value:"BANANA",
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
    const stepCallback = jest.fn();

    const stepper = shallow(
      <Stepper { ...stepperProps } onUpdate={stepCallback} />
    );

    stepper.instance().stepOnce(1);
    expect(stepCallback.mock.calls[0][1]).toBe('ORANGE');
  })

  test('loops when list stepping', () => {
    const stepCallback = jest.fn();
    const stepList = [{ value:'BANANA', label: 'Banana' }, { value:'ORANGE', label: 'Orange' }, { value:'KIWI', label: 'Kiwi' }];

    const stepper = shallow(
      <Stepper { ...stepperProps } onUpdate={stepCallback} value={stepList[0].value} />
    );

    [0,1,2,0].forEach(index => {
      stepper.instance().stepOnce(1);
      stepper.setProps({value: stepList[index].value});
    });

    expect(stepCallback.mock.calls[2][1]).toBe('KIWI');
  })
});

describe('Test that the value stepper', () => {
  let stepperProps;

  beforeEach(() => {
    stepperProps = {
      value:100,
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
    const stepCallback = jest.fn();

    const stepper = shallow(
      <Stepper { ...stepperProps } onUpdate={stepCallback} />
    );

    stepper.instance().stepOnce(1);
    expect(stepCallback.mock.calls[0][1]).toBe(101);
  })
});

