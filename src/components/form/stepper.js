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
      currentSelectedOptionIndex: ArrayHelper.clampRange(newIndex, 0, this.state.currentSelectedOptionIndex.length - 1),
    });
  };

  render() {
    const { options } = this.props;

    return (
      <View className="stepper">
        <Text className="stepper__label">Slider label</Text>
        <View className="stepper__wrapper">
          <Button onClick={() => this.step(-1)} className="stepper__button stepper__button--left" />
          <Text className="stepper__value">{options[this.state.currentSelectedOptionIndex]} kg</Text>
          <Button onClick={() => this.step(1)} className="stepper__button stepper__button--right" />
        </View>
      </View>
    );
  }
}

Stepper.propTypes = {
  options: PT.array,
};

Stepper.defaultProps = {
  options: [],
};

export default Stepper;
