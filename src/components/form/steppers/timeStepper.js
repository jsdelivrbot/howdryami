import React, { Component } from 'react';
import PT from 'prop-types';
import { Field } from 'redux-form';
import moment from 'moment';

import PureStepper from './pureStepper';

class TimeStepper extends Component {
  componentWillMount() {
    this.checkForLegalValueSelection(this.props.input.value);
  }

  componentWillReceiveProps(newProps) {
    this.checkForLegalValueSelection(newProps.input.value);
  }

  checkForLegalValueSelection(value) {
    if (!moment(value, 'x').isValid()) {
      const now = moment().format('x');
      this.reportNewValue(now);
    }
  }

  reportNewValue = value => {
    const { onChange } = this.props.input;
    onChange(value);
  };

  stepOnce = direction => {
    const { value } = this.props.input;

    const newValue = parseInt(value, 10) + (60000 * direction);

    this.reportNewValue(newValue);
  };

  render() {
    const { header } = this.props;
    const { value } = this.props.input;

    const stepperLabel = moment(value, 'x').format('D MMM HH:mm');

    return (
      <PureStepper
        stepOnceHandler={this.stepOnce}
        header={header}
        label={stepperLabel}
      />
    );
  }
}

TimeStepper.propTypes = {
  header: PT.string,
  input: PT.object.isRequired,
};

TimeStepper.defaultProps = {
  header: '',
};

const ReduxStepper = props => {
  const { fieldName } = props;
  return (
    <Field
      parse={value => parseInt(value, 10)}
      name={fieldName}
      component={TimeStepper}
      props={props}
    />
  );
};

ReduxStepper.propTypes = {
  fieldName: PT.string.isRequired,
};

export { ReduxStepper as TimeStepper };
