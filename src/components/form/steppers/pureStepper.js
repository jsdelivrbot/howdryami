import React, { Component } from 'react';
import PT from 'prop-types';

import { Text, View, Icon } from '../../../particles/index';
import { Button } from '../../button/index';

import './stepper.css';

class PureStepper extends Component {
  state = {
    stepSpeed: 500,
  };

  stepOnce = direction => {
    const { stepDirection = direction, stepSpeed } = this.state;
    this.props.stepOnceHandler(stepDirection);

    this.setState({
      stepSpeed: Math.round(stepSpeed * 0.9),
    });

    if (stepDirection !== 0) {
      clearTimeout(this.pressTimeout);
      this.pressTimeout = setTimeout(() => this.stepOnce(stepDirection), stepSpeed);
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
    const {
      unit,
      label,
      icon,
      header,
    } = this.props;

    const stepIcon = icon ? <Icon image={icon} /> : null;

    return (
      <View className="stepper">
        <Text className="stepper__header">{header}</Text>
        <View className="stepper__wrapper">
          <Button
            onTouchStart={e => this.mouseDownHandler(e, -1)}
            onTouchEnd={() => this.mouseUpHandler()}
            className="stepper__button stepper__button--left"
          />
          <View className="stepper__selection">
            {stepIcon}
            <Text className="stepper__label">{label} {unit}</Text>
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

PureStepper.propTypes = {
  label: PT.string,
  unit: PT.string,
  icon: PT.string,
  header: PT.string,
  stepOnceHandler: PT.func.isRequired,
};

PureStepper.defaultProps = {
  label: '',
  unit: '',
  header: '',
  icon: null,
};

export default PureStepper;
