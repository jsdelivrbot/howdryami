import API from '../../services/api';
import * as actions from './actions';

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

const deleteDiaryEntry = entry => dispatch => {
  dispatch(actions.deleteDiaryEntry(entry));
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
