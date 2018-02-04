import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

import { barSelectors, barOperations } from '../../ducks/bar';

import { View } from '../../particles';
import { Header, RFStepper } from '../../components';

import './diaryEntry.css';

class DiaryEntry extends Component {
  registerHandler = e => {
    e.preventDefault();
    // this.props.registerUser(this.state.localUser);
    // this.props.history.push('home');
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
          <RFStepper
            fieldName="type"
            stepList={drinkList}
          />
          <RFStepper
            fieldName="size"
            stepList={availableProofs}
          />
          <RFStepper
            fieldName="proof"
            stepList={availableSizes}
          />
        </form>
      </View>
    );
  }
}

DiaryEntry.propTypes = {
  drinkList: PT.array,
  drinkLibrary: PT.array,
  selectedDrink: PT.string,
};

DiaryEntry.defaultProps = {
  drinkList: [],
  drinkLibrary: [],
  selectedDrink: '',
};
const initValues = {
  type: 'COCKTAIL',
  size: null,
  proof: null,
};

const mapStateToProps = (store, ownProps) => ({
  drinkLibrary: barSelectors.allDrinks(store),
  drinkList: barSelectors.availableDrinks({ store }),
  selectedDrink: formValueSelector('diaryEntryForm')(store, 'type'),
  initialValues: initValues,
});

const mapDispatchToProps = () => ({});

export { DiaryEntry as TestDiaryEntry };

const formOptions = {
  form: 'diaryEntryForm',
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm(formOptions)((DiaryEntry))));

