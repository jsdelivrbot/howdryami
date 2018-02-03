import React, { Component } from 'react';
import PT from 'prop-types';
import { Field } from 'redux-form';
import { ArrayHelper } from '../../helpers/utils';

import { Text, View, Icon } from '../../particles';
import { Button } from '../button';
import { getIconById } from '../icons/index';

import './stepper.css';

class Stepper extends Component {
  state = {
    stepSpeed: 500,
  };

  getValueFromIndex = index => {
    const { stepList } = this.props;
    return stepList ? stepList[index].value : index;
  };

  getIndexFromValue = () => {
    const { stepList = [], value = '' } = this.props;
    const stepListIndex = stepList.findIndex(step => (step.value === value));
    return stepList ? stepListIndex : false;
  };

  getLabelFromValue = value => {
    const { stepList = [] } = this.props;
    const foundStep = stepList.find(step => step.value === value);
    return foundStep ? foundStep.label : '';
  };

  getIconFromValue = value => {
    const { stepList = [] } = this.props;
    const index = this.getIndexFromValue(value);
    if (index < 0) return false;
    return stepList[index].icon;
  }

  reportNewValue = value => {
    const { fieldName, onUpdate } = this.props;
    onUpdate(fieldName, value);
  };

  stepOnce = direction => {
    const { stepList } = this.props;
    const { stepDirection = direction, stepSpeed } = this.state;

    const [clampMin, clampMax] = stepList ? [0, stepList.length - 1] : this.props.clampRange;
    const proposedIndex = this.getIndexFromValue() + stepDirection;
    const clampedIndex = stepList ?
      ArrayHelper.loopRange(proposedIndex, clampMin, clampMax)
      :
      ArrayHelper.clampRange(proposedIndex, clampMin, clampMax);

    const newValue = stepList ? this.getValueFromIndex(clampedIndex) : clampedIndex;

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
    const stepperLabel = this.getLabelFromValue(value);

    const stepIconID = this.getIconFromValue(value);
    const stepIcon = stepIconID ? <Icon image={getIconById(stepIconID)} /> : null;

    return (
      <View className="stepper">
        <Text className="stepper__label">{label}</Text>
        <View className="stepper__wrapper">
          <Button
            onTouchStart={e => this.mouseDownHandler(e, -1)}
            onTouchEnd={() => this.mouseUpHandler()}
            className="stepper__button stepper__button--left"
          />
          <View className="stepper__selection">
            {stepIcon}
            <Text className="stepper__value">{stepperLabel} {unit}</Text>
          </View>
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
  stepList: PT.arrayOf(PT.shape({ value: PT.string, label: PT.string, icon: PT.string })),
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

const ReduxStepper = props => {
  const { fieldName } = props;
  console.log(props)
  return (
    <Field
      name={fieldName}
      component={Stepper}
      type="text"
      props={props}
    />
  );
};

ReduxStepper.propTypes = {
  fieldName: PT.string.isRequired,
};

export default Stepper;
export { ReduxStepper as RFStepper };
