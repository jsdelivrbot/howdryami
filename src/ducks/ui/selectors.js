import { createSelector } from 'reselect';

const genderListSelector = createSelector(
  store => store.ui.genders,
  genders => genders,
);

export {
  genderListSelector,
};

