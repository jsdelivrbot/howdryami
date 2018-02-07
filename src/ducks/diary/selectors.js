import { createSelector } from 'reselect';
import moment from 'moment';

const MILLISECONDS_IN_A_DAY = 86400000;

const allEntries = createSelector(
  store => store.diary,
  diary => diary.sort((a, b) => a.time < b.time),
);

const entriesPast24hours = createSelector(
  store => allEntries(store),
  all => {
    const rightNow = parseInt(moment().format('x'), 10);
    return all.filter(item => rightNow - item.time < MILLISECONDS_IN_A_DAY);
  },
);

export {
  allEntries,
  entriesPast24hours,
};

