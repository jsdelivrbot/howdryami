import { createSelector } from 'reselect';

const genderListSelector = createSelector(
  store => store.ui.genders,
  genders => genders,
);

const diaryEditContainerToShowSelector = createSelector(
  store => store.ui.diaryEditContainerToShow,
  diaryEditContainerToShow => diaryEditContainerToShow,
);

export {
  genderListSelector,
  diaryEditContainerToShowSelector,
};

