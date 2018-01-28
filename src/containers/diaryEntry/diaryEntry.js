import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import PT from 'prop-types';

import { barSelectors } from '../../ducks/bar';
import * as Icons from '../../components/icons';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  componentWillMount() {
    this.setState({
      drink: {
        type: 'COCKTAIL',
        size: 1,
        proof: 1,
        timestamp: Date.now(),
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  registerHandler = () => {
    // this.props.registerUser(this.state.localUser);
    // this.props.history.push('home');
  };

  updateField = (fieldName, value) => {
    const { drink } = this.state;
    drink[fieldName] = value;
    console.log(value);
    console.log(drink)

    this.setState({ drink: { ...drink } });
  };

  render() {
    const { updateField } = this;
    const { type } = this.state.drink;
    const drinkTypes = this.props.drinks.map(drink => ({ value: drink.id, label: drink.label, icon: Icons.getIconById(drink.icon) }));

    return (
      <View>
        <Header>Add</Header>
        <Stepper
          fieldName="type"
          stepList={drinkTypes}
          onUpdate={updateField}
          value={type}
        />
      </View>
    );
  }
}

DiaryEntry.propTypes = {
  drinks: PT.array,
};

DiaryEntry.defaultProps = {
  drinks: [],
};

const mapStateToProps = state => ({
  drinks: barSelectors.allDrinks(state),
});

const mapDispatchToProps = dispatch => (
  {}
);

export { DiaryEntry as TestDiaryEntry };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiaryEntry));
