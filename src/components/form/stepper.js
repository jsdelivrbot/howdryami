import React, { Component } from 'react';
import PT from 'prop-types';

import { ArrayHelper } from '../../helpers/utils';

import { Text, View } from '../../particles';
import { Button } from '../button';

import './stepper.css';

class Stepper extends Component {
  state = {
    stepSpeed: 500,
  }

  getValueFromIndex = index => {
    const { stepList } = this.props;
    return stepList ? stepList[index].value : index;
  };

  getIndexFromValue = () => {
    const { stepList, value } = this.props;
    const stepListIndex = stepList && stepList.findIndex(step => (step.value === value));
    return stepList ? stepListIndex : value;
  }

  getLabelFromValue = value => {
    const { stepList } = this.props;
    return stepList ? stepList.find(step => step.value === value).value : value;
  }

  reportNewValue = value => {
    const { fieldName, onUpdate } = this.props;
    onUpdate(fieldName, value);
  };

  stepOnce = direction => {
    const { stepList } = this.props;
    const { stepDirection = direction, stepSpeed } = this.state;

    const newIndex = this.getIndexFromValue() + stepDirection;
    const [clampMin, clampMax] = this.props.clampRange || [0, stepList.length - 1];
    const newClampedIndex = ArrayHelper.clampRange(newIndex, clampMin, clampMax);
    const newValue = stepList ? this.getValueFromIndex(newClampedIndex) : newClampedIndex;

    this.reportNewValue(newValue);

    this.setState({
      stepSpeed: Math.round(stepSpeed * 0.9),
    });


    if (stepDirection !== 0) {
      clearTimeout(this.pressTimeout);
      this.pressTimeout = setTimeout(() => this.stepOnce(), stepSpeed);
    }
  };

  mouseDownHandler = (e, direction) => {
    this.setState({ stepDirection: direction });
    this.stepOnce(direction);
  };

  mouseUpHandler = () => {
    clearTimeout(this.pressTimeout);
    this.setState({ stepDirection: undefined, stepSpeed: 500 });
  };

  render() {
    const { unit, label, value } = this.props;

    const stepperValue = this.getLabelFromValue(value);

    return (
      <View className="stepper">
        <Text className="stepper__label">{label}</Text>
        <View className="stepper__wrapper">
          <Button
            onTouchStart={e => this.mouseDownHandler(e, -1)}
            onTouchEnd={() => this.mouseUpHandler()}
            className="stepper__button stepper__button--left"
          />
          <Text className="stepper__value">{stepperValue} {unit}</Text>
          <Button
            onTouchStart={e => this.mouseDownHandler(e, 1)}
            onTouchEnd={() => this.mouseUpHandler()}
            className="stepper__button stepper__button--right"
          />
        </View>
      </View>
    );
  }
}

Stepper.propTypes = {
  fieldName: PT.string.isRequired,
  onUpdate: PT.func.isRequired,
  label: PT.string,
  stepList: PT.arrayOf(PT.shape({ value: PT.string, label: PT.string })),
  unit: PT.string,
  clampRange: PT.array,
  value: PT.oneOfType([PT.string, PT.number]).isRequired,
};

Stepper.defaultProps = {
  label: '',
  stepList: null,
  unit: '',
  clampRange: [-9999999999, 9999999999],
};

export default Stepper;
