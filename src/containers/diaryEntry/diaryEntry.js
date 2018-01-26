import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import PT from 'prop-types';

import { barSelectors } from '../../ducks/bar';
import { userSelectors, userOperations } from '../../ducks/user';
import * as Icons from '../../components/icons';

import { View } from '../../particles';
import { Header, Paragraph, Stepper, Button } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const drinkTypes = this.props.drinks.map(drink => ({id: drink.id, title: drink.title, icon: Icons.getIconById(drink.id)}));
    console.log(drinkTypes);

    return (
      <View>
        <Header>Add</Header>
        <Stepper fieldName="drinkType" />

      </View>
    );
  }
}

DiaryEntry.propTypes = {
  history: PT.object.isRequired,
};

DiaryEntry.defaultProps = {
};

const mapStateToProps = state => ({
  drinks: barSelectors.allDrinks(state),
});

const mapDispatchToProps = dispatch => (
  {}
);

export { DiaryEntry as TestDiaryEntry };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiaryEntry));
