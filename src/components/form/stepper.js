import React, { Component } from 'react';
import PT from 'prop-types';

import { ArrayHelper } from '../../helpers/utils';

import { Text, View } from '../../particles';
import { Button } from '../button';

import './stepper.css';

class Stepper extends Component {
  state = {
    currentSelectedOptionIndex: 0,
  };

  step = direction => {
    const newIndex = this.state.currentSelectedOptionIndex + direction;
    this.setState({
      currentSelectedOptionIndex: ArrayHelper.clampRange(newIndex, 0, this.props.options.length - 1),
    });
  };

  render() {
    const { options, unit } = this.props;
    const { currentSelectedOptionIndex } = this.state;

    const selectedStep = options[currentSelectedOptionIndex];
    const stepperValue = (typeof selectedStep === 'object') ? selectedStep.value : selectedStep;

    return (
      <View className="stepper">
        <Text className="stepper__label">Slider label</Text>
        <View className="stepper__wrapper">
          <Button onClick={() => this.step(-1)} className="stepper__button stepper__button--left" />
          <Text className="stepper__value">{stepperValue} {unit}</Text>
          <Button onClick={() => this.step(1)} className="stepper__button stepper__button--right" />
        </View>
      </View>
    );
  }
}

Stepper.propTypes = {
  options: PT.arrayOf(PT.shape({ key: PT.string, value: PT.string })),
  unit: PT.string,
};

Stepper.defaultProps = {
  options: [],
  unit: '',
};

export default Stepper;
