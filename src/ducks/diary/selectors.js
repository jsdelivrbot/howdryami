import { createSelector } from 'reselect';

const allEntries = createSelector(
  store => store.diary,
  diary => diary,
);

export {
  allEntries,
};

