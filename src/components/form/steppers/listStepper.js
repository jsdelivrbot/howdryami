import React, { Component } from 'react';
import PT from 'prop-types';
import { Field } from 'redux-form';
import { ArrayHelper } from '../../../helpers/utils';

import PureStepper from './pureStepper';

import './stepper.css';

class Stepper extends Component {
  componentDidUpdate() {
    const { input, stepList } = this.props;

    this.checkForLegalValueSelection(input.value, stepList);
  }

  getValueFromIndex = index => {
    const { stepList } = this.props;
    return stepList ? stepList[index].value : index;
  };

  getIndexFromValue = () => {
    const { stepList = [] } = this.props;
    const { value } = this.props.input;
    const stepListIndex = stepList.findIndex(step => (step.value === value));
    return stepList ? stepListIndex : false;
  };

  getLabelFromValue = (value, stepList = []) => {
    const foundStep = stepList.find(step => step.value === value);
    return foundStep ? foundStep.label : null;
  };

  getIconFromValue = value => {
    const { stepList = [] } = this.props;
    const index = this.getIndexFromValue(value);
    if (index < 0) return false;
    return stepList[index].icon;
  };

  getMidrangeValue = (stepList = []) => (stepList.length > 0 ? stepList[Math.floor(stepList.length / 2)].value : '');

  checkForLegalValueSelection = (value, stepList) => {
    if (!this.getLabelFromValue(value, stepList)) {
      this.reportNewValue(this.getMidrangeValue(stepList));
    }
  }

  reportNewValue = value => {
    const { onChange } = this.props.input;
    onChange(value);
  };

  stepOnce = direction => {
    const { stepList } = this.props;

    const [clampMin, clampMax] = [0, stepList.length - 1];
    const proposedIndex = this.getIndexFromValue() + direction;
    const clampedIndex = ArrayHelper.loopRange(proposedIndex, clampMin, clampMax);

    const newValue = this.getValueFromIndex(clampedIndex);

    this.reportNewValue(newValue);
  };

  render() {
    const { unit, header, stepList } = this.props;
    const { value } = this.props.input;

    const label = this.getLabelFromValue(value, stepList);

    const stepIconResource = this.getIconFromValue(value) || '';

    return (
      <PureStepper
        header={header}
        label={label}
        unit={unit}
        icon={stepIconResource}
        stepOnceHandler={this.stepOnce}
      />
    );
  }
}


Stepper.propTypes = {
  stepList: PT.arrayOf(PT.shape({ value: PT.string, label: PT.string, icon: PT.string })),
  unit: PT.string,
  header: PT.string,
  input: PT.object.isRequired,
};

Stepper.defaultProps = {
  stepList: [],
  header: '',
  unit: '',
};

const ReduxStepper = props => {
  const { fieldName, header, stepList } = props;
  return (
    <Field
      name={fieldName}
      component={Stepper}
      type="text"
      header={header}
      stepList={stepList}
    />
  );
};

ReduxStepper.propTypes = {
  fieldName: PT.string.isRequired,
  stepList: PT.arrayOf(PT.shape({ value: PT.string, label: PT.string, icon: PT.string })).isRequired,
  header: PT.string,
};

ReduxStepper.defaultProps = {
  header: '',
};

export { ReduxStepper as ListStepper };
