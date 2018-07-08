import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, getFormValues } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { barSelectors } from '../../ducks/bar';
import { diaryOperations } from '../../ducks/diary';

import TitleBar from '../../components/titleBar/titleBar';
import { View } from '../../particles';
import { ListStepper, TimeStepper, Button } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  state = { isNew: true };

  componentDidUpdate() {
    const { diaryID } = this.props.match.params;

    if (diaryID) {
      this.props.fetchDiaryEntry(diaryID);
      if (!this.state.isNew) {
        this.setState({ isNew: true });
      }
    }
  }

  registerHandler = e => {
    e.preventDefault();

    if (e.target.dataset.role === 'register') {
      this.props.saveDiaryEntry(this.props.formDiaryEntry);
      this.props.history.push('/home');
    }
  };

  render() {
    const { registerHandler } = this;
    const { drinkList, drinkLibrary, selectedDrink } = this.props;
    const { isNew } = this.state;

    const availableProofs = barSelectors.availableProofs({ drinkLibrary, selectedDrink });
    const availableSizes = barSelectors.availableSizes({ drinkLibrary, selectedDrink });

    const titleBarHeader = isNew ? 'Add new drink' : 'Update drink';
    const submitLabel = isNew ? 'Add drink' : 'Update drink';

    return (
      <View className="DiaryEntry">
        <TitleBar
          label={titleBarHeader}
        />
        <form onSubmit={registerHandler}>
          <ListStepper
            fieldName="type"
            unit="stk"
            stepList={drinkList}
          />
          <ListStepper
            fieldName="proof"
            header="proofs"
            unit="stk"
            stepList={availableProofs}
          />
          <ListStepper
            fieldName="size"
            header="sizes"
            unit="stk"
            stepList={availableSizes}
          />
          <TimeStepper
            fieldName="time"
            header="time"
          />
          <Button dataRole="register" type={Button.SUBMIT} onClick={registerHandler}>{submitLabel}</Button>
        </form>
      </View>
    );
  }
}

DiaryEntry.propTypes = {
  history: PT.object.isRequired,
  saveDiaryEntry: PT.func.isRequired,
  fetchDiaryEntry: PT.func.isRequired,
  match: PT.object.isRequired,
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

const mapStateToProps = store => ({
  drinkLibrary: barSelectors.allDrinks(store),
  drinkList: barSelectors.availableDrinks({ store }),
  selectedDrink: formValueSelector('diaryEntryForm')(store, 'type'),
  formDiaryEntry: getFormValues('diaryEntryForm')(store),
});

const mapDispatchToProps = dispatch => ({
  saveDiaryEntry: entry => diaryOperations.saveDiaryEntry(entry)(dispatch),
  fetchDiaryEntry: diaryID => diaryOperations.fetchDiaryEntry(diaryID)(dispatch),
});

export { DiaryEntry as TestDiaryEntry };

const formOptions = {
  form: 'diaryEntryForm',
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm(formOptions)((DiaryEntry))));

