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
  const mutatedEntry = { ...entry, id: uuid() };

  API.saveDiaryToLocal(mutatedEntry).then(() => {
    dispatch(actions.addDiaryEntry(mutatedEntry));
  });
};

const deleteDiaryEntry = id => dispatch => {
  const userResponse = new Promise((resolve, reject) => {
    const modalOptions = {
      isVisible: true,
      text: 'foobar',
      confirmCallback: () => resolve(),
      cancelCallback: () => reject(),
    };

    dispatch(uiOperations.toggleConfirmModal(modalOptions));
  }).then(API.deleteDiaryFromLocal(id))
    .then(() => dispatch(actions.deleteDiaryEntry(id)))
    .catch(() => dispatch(uiOperations.toggleConfirmModal({ isVisible: false })));
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
