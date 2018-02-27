import API from '../../services/api';
import * as actions from './actions';

import { uiOperations } from '../ui';

const uuid = require('uuid/v4');

const hydrateDiary = () => dispatch => {
  API.loadDiaryFromLocal().then(diary => {
    if (diary) {
      dispatch(actions.hydrateDiary(diary));
    }
  });
};

const addDiaryEntry = entry => dispatch => {
  API.saveDiaryToLocal(entry).then(() => {
    const mutatedEntry = { ...entry, uuid: uuid() };
    dispatch(actions.addDiaryEntry(mutatedEntry));
  });
};

const deleteDiaryEntry = id => dispatch => {
  // dispatch(actions.deleteDiaryEntry(id));
  const modalOptions = { isVisible: true, text: 'foobar', confirmCallback: () => {}, cancelCallback: () => {} };
  dispatch(uiOperations.toggleConfirmModal(modalOptions));
  console.log('delete entry', id);
};

const updateDiaryEntry = entry => dispatch => {
  dispatch(actions.updateDiaryEntry(entry));
};

export {
  hydrateDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  updateDiaryEntry,
};
