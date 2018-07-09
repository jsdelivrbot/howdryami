import moment from 'moment';
import { change } from 'redux-form';
import API from '../../services/api';
import * as actions from './actions';
import { DIARY_HYDRATION_EMPTY, DIARY_HYDRATION_HAS_DATA } from './types';

import { uiOperations } from '../ui';

const uuid = require('uuid/v4');

const filterEntriesLessThan24Hours = diary => {
  const timeRightNow = moment().format('x');
  const millisecondsInADay = 3600 * 24 * 1000;
  return diary.filter(entry => entry.time > timeRightNow - millisecondsInADay);
};

const hydrateDiary = () => dispatch => (
  new Promise(resolve => {
    API.loadDiaryFromLocal().then(diary => {
      if (diary) {
        const filteredDiary = filterEntriesLessThan24Hours(diary);
        API.replaceDiaryToLocal(filteredDiary);
        dispatch(actions.hydrateDiary(filteredDiary));
      }
      if (diary) {
        resolve(DIARY_HYDRATION_HAS_DATA);
      } else {
        resolve(DIARY_HYDRATION_EMPTY);
      }
    });
  })
);

const saveDiaryEntry = entry => dispatch => {
  const isNew = entry.id === undefined;
  const mutatedEntry = isNew ? { ...entry, id: uuid() } : { ...entry };

  API.saveDiaryToLocal(mutatedEntry).then(() => (
    isNew
      ?
      dispatch(actions.addDiaryEntry(mutatedEntry))
      :
      dispatch(actions.updateDiaryEntry(mutatedEntry))
  ));
};

const fetchDiaryEntry = diaryID => dispatch => {
  API.fetchDiaryFromLocal(diaryID).then(response => {
    const {
      id, proof, size, time, type,
    } = response;

    dispatch(change('diaryEntryForm', 'id', id));
    dispatch(change('diaryEntryForm', 'proof', proof));
    dispatch(change('diaryEntryForm', 'size', size));
    dispatch(change('diaryEntryForm', 'time', time));
    dispatch(change('diaryEntryForm', 'type', type));
    dispatch(change('diaryEntryForm', 'isDoneLoading', true));
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

export {
  hydrateDiary,
  saveDiaryEntry,
  fetchDiaryEntry,
  deleteDiaryEntry,
  filterEntriesLessThan24Hours,
};
