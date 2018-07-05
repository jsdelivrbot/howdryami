import API from '../../services/api';
import * as actions from './actions';
import { DIARY_HYDRATION_EMPTY, DIARY_HYDRATION_HAS_DATA } from './types';

import { uiOperations } from '../ui';

const uuid = require('uuid/v4');

const hydrateDiary = () => dispatch => (
  new Promise(resolve => {
    API.loadDiaryFromLocal().then(diary => {
      if (diary) {
        dispatch(actions.hydrateDiary(diary));
      }
      if (diary) {
        resolve(DIARY_HYDRATION_HAS_DATA);
      } else {
        resolve(DIARY_HYDRATION_EMPTY);
      }
    });
  })
);

const addDiaryEntry = entry => dispatch => {
  const mutatedEntry = { ...entry, id: uuid() };

  API.saveDiaryToLocal(mutatedEntry).then(() => {
    dispatch(actions.addDiaryEntry(mutatedEntry));
  });
};

const deleteDiaryEntry = id => dispatch => {
  new Promise((resolve, reject) => {
    const modalOptions = {
      isVisible: true,
      text: 'Are you sure you want to delete this entry?',
      confirmCallback: () => resolve(),
      cancelCallback: () => reject(),
    };

    dispatch(uiOperations.toggleConfirmModal(modalOptions));
  })
    .then(() => {
      API.deleteDiaryFromLocal(id);
      dispatch(actions.deleteDiaryEntry(id));
      dispatch(uiOperations.toggleConfirmModal({ isVisible: false }));
    })
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
