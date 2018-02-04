import React, { Component } from 'react';
import PT from 'prop-types';
import { Field } from 'redux-form';
import { ArrayHelper } from '../../../helpers/utils';

import PureStepper from './pureStepper';

import './stepper.css';

class RangeStepper extends Component {
  componentWillMount() {
    this.checkForLegalValueSelection(this.props.input.value);
  }

  componentWillReceiveProps(newProps) {
    this.checkForLegalValueSelection(newProps.input.value);
  }

  checkForLegalValueSelection(value) {
    if (value === '') this.reportNewValue(0);
  }

  reportNewValue = value => {
    const { onChange } = this.props.input;
    onChange(value);
  };

  stepOnce = direction => {
    const { value } = this.props.input;

    const [clampMin, clampMax] = this.props.clampRange;
    const proposedValue = value + direction;
    const clampedValue = ArrayHelper.clampRange(proposedValue, clampMin, clampMax);

    this.reportNewValue(clampedValue);
  };

  render() {
    const { value } = this.props.input;
    const { unit, header } = this.props;

    const stepperLabel = `${value}`;

    return (
      <PureStepper
        stepOnceHandler={this.stepOnce}
        label={stepperLabel}
        unit={unit}
        header={header}
      />
    );
  }
}

RangeStepper.propTypes = {
  unit: PT.string,
  clampRange: PT.array,
  input: PT.object.isRequired,
  header: PT.string,
};

RangeStepper.defaultProps = {
  unit: '',
  clampRange: [-9999999999, 9999999999],
  header: '',
};

const ReduxStepper = props => {
  const { fieldName } = props;
  return (
    <Field
      name={fieldName}
      component={RangeStepper}
      type="text"
      props={props}
    />
  );
};

ReduxStepper.propTypes = {
  fieldName: PT.string.isRequired,
  unit: PT.string,
  clampRange: PT.array,
  header: PT.string,
};

ReduxStepper.defaultProps = {
  unit: '',
  clampRange: [-9999999999, 9999999999],
  header: '',
}

export { ReduxStepper as RangeStepper };
