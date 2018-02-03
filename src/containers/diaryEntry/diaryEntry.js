import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { barSelectors } from '../../ducks/bar';

import { View } from '../../particles';
import { Header, RFStepper } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  registerHandler = e => {
    e.preventDefault();
    // this.props.registerUser(this.state.localUser);
    // this.props.history.push('home');
  };

  updateField = (fieldName, value) => {
    const { drink } = this.state;
    drink[fieldName] = value;

    this.setState({ drink: { ...drink } });
  };

  render() {
    const { updateField, registerHandler } = this;
    const { availableDrinks, availableProofs, availableSizes } = this.props;

    return (
      <View>
        <Header>Add</Header>
        <form onSubmit={registerHandler}>
          <RFStepper
            fieldName="type"
            stepList={availableDrinks}
            onUpdate={updateField}
          />
          <RFStepper
            fieldName="size"
            stepList={availableProofs}
            onUpdate={updateField}
          />
          <RFStepper
            fieldName="proof"
            stepList={availableSizes}
            onUpdate={updateField}
          />
        </form>
      </View>
    );
  }
}

DiaryEntry.propTypes = {
  availableDrinks: PT.array,
  availableProofs: PT.array,
  availableSizes: PT.array,
};

DiaryEntry.defaultProps = {
  availableDrinks: [],
  availableProofs: [],
  availableSizes: [],
};
const initValues = {
  type: 'COCKTAIL',
};

const mapStateToProps = (store, ownProps, state) => ({
  availableDrinks: barSelectors.allDrinks(store),
  availableProofs: [], // barSelectors.availableProofs({ store, drink: state.drink.type }),
  availableSizes: [], // barSelectors.availableSizes({ store, drink: state.drink.type }),
  initialValues: initValues,
});

const mapDispatchToProps = () => (
  {}
);

export { DiaryEntry as TestDiaryEntry };

const formOptions = {
  form: 'diaryEntryForm',
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm(formOptions)(DiaryEntry)));

