import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, getFormValues } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { barSelectors } from '../../ducks/bar';
import { diaryOperations } from '../../ducks/diary';

import { View } from '../../particles';
import { Header, ListStepper, TimeStepper, Button } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  registerHandler = e => {
    e.preventDefault();

    if (e.target.dataset.role === 'register') {
      this.props.addDiaryEntry(this.props.formDiaryEntry);
      this.props.history.push('home');
    }
  };

  render() {
    const { dispatchChange, registerHandler } = this;
    const { drinkList, drinkLibrary, selectedDrink } = this.props;

    const availableProofs = barSelectors.availableProofs({ drinkLibrary, selectedDrink });
    const availableSizes = barSelectors.availableSizes({ drinkLibrary, selectedDrink });

    return (
      <View>
        <Header>Add</Header>
        <form onSubmit={registerHandler}>
          <ListStepper
            fieldName="type"
            unit="stk"
            stepList={drinkList}
          />
          <ListStepper
            fieldName="proofs"
            header="proofs"
            unit="stk"
            stepList={availableProofs}
          />
          <ListStepper
            fieldName="sizes"
            header="sizes"
            unit="stk"
            stepList={availableSizes}
          />
          <TimeStepper
            fieldName="time"
            header="time"
          />
          <Button dataRole="register" type={Button.SUBMIT} onClick={registerHandler}>Add drink</Button>
        </form>
      </View>
    );
  }
}

DiaryEntry.propTypes = {
  history: PT.object.isRequired,
  addDiaryEntry: PT.func.isRequired,
  drinkList: PT.array,
  drinkLibrary: PT.array,
  selectedDrink: PT.string,
  formDiaryEntry: PT.object,
};

DiaryEntry.defaultProps = {
  drinkList: [],
  drinkLibrary: [],
  selectedDrink: '',
  formDiaryEntry: {},
};

const mapStateToProps = (store, ownProps) => ({
  drinkLibrary: barSelectors.allDrinks(store),
  drinkList: barSelectors.availableDrinks({ store }),
  selectedDrink: formValueSelector('diaryEntryForm')(store, 'type'),
  formDiaryEntry: getFormValues('diaryEntryForm')(store),
});

const mapDispatchToProps = dispatch => ({
  addDiaryEntry: entry => diaryOperations.addDiaryEntry(entry)(dispatch),
});

export { DiaryEntry as TestDiaryEntry };

const formOptions = {
  form: 'diaryEntryForm',
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm(formOptions)((DiaryEntry))));

