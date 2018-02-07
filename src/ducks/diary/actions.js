import * as types from './types';

const hydrateDiary = diaryData => ({
  type: types.HYDRATE_DIARY,
  data: diaryData,
});

const addDiaryEntry = entryData => ({
  type: types.ADD_DIARY_ENTRY,
  data: entryData,
});

const deleteDiaryEntry = entryData => ({
  type: types.DELETE_DIARY_ENTRY,
  data: entryData,
});

const updateDiaryEntry = entryData => ({
  type: types.UPDATE_DIARY_ENTRY,
  data: entryData,
});

export {
  hydrateDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  updateDiaryEntry,
};
