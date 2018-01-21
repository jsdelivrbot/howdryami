import React, { Component } from 'react';
import PT from 'prop-types';

import { ArrayHelper } from '../../helpers/utils';

import { Text, View } from '../../particles';
import { Button } from '../button';

import './stepper.css';

class Stepper extends Component {
  componentWillMount() {
    this.setState({
      currentStepIndex: this.props.startIndex,
      stepSpeed: 500,
    });
  }

  getMyValue = () => {
    const { stepList } = this.props;
    const { currentStepIndex } = this.state;
    return stepList ? stepList[currentStepIndex].value : currentStepIndex;
  };

  reportNewValue = () => {
    const { fieldName, onUpdate } = this.props;
    onUpdate(fieldName, this.getMyValue());
  };

  stepOnce = direction => {
    const { stepList } = this.props;
    const { stepDirection = direction, stepSpeed } = this.state;

    const newIndex = this.state.currentStepIndex + stepDirection;
    const [clampMin, clampMax] = this.props.clampRange || [0, stepList.length - 1];
    const newClampedIndex = ArrayHelper.clampRange(newIndex, clampMin, clampMax);

    this.setState({
      currentStepIndex: newClampedIndex,
      stepSpeed: Math.round(stepSpeed * 0.9),
    });

    this.reportNewValue();

    if (stepDirection !== 0) {
      clearTimeout(this.pressTimeout);
      this.pressTimeout = setTimeout(() => this.stepOnce(), stepSpeed);
    }
  };

  mouseDownHandler = (e, direction) => {
    e.preventDefault();
    this.setState({ stepDirection: direction });
    this.stepOnce(direction);
  };

  mouseUpHandler = () => {
    clearTimeout(this.pressTimeout);
    this.setState({ stepDirection: undefined, stepSpeed: 500 });
  };

  render() {
    const { unit, label } = this.props;

    const stepperValue = this.getMyValue();

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
  stepList: PT.arrayOf(PT.shape({ key: PT.string, value: PT.string })),
  unit: PT.string,
  clampRange: PT.array,
  startIndex: PT.number,
};

Stepper.defaultProps = {
  label: '',
  stepList: null,
  unit: '',
  clampRange: null,
  startIndex: 0,
};

export default Stepper;
