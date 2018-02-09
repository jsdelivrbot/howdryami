import { createSelector } from 'reselect';
import moment from 'moment';

import { barSelectors } from '../bar';

const MILLISECONDS_IN_A_DAY = 86400000;

const allEntries = createSelector(
  store => store.diary,
  diary => diary.sort((a, b) => a.time < b.time),
);

const entriesPast24hours = createSelector(
  store => allEntries(store),
  store => barSelectors.allDrinks(store),
  (allDiary, allDrinks) => {
    const rightNow = parseInt(moment().format('x'), 10);
    return allDiary
      .filter(item => rightNow - item.time < MILLISECONDS_IN_A_DAY)
      .reduce((collection, item) => {
        const foundDrink = allDrinks.find(singleDrink => singleDrink.value === item.type);
        return foundDrink ? [...collection, { ...item, ...foundDrink }] : [...collection];
      }, []);
  },
);

const bacRightNow = createSelector(
  store => entriesPast24hours(store),
  allDiary => {
    return 1.5;
  },
);

export {
  allEntries,
  entriesPast24hours,
  bacRightNow,
};

