import { createSelector } from 'reselect';
import moment from 'moment';

import { barSelectors } from '../bar';
import { userSelectors } from '../user';

import BacEngine from '../../services/bacEngine';
import { BAC_BURNDOWN, GENDER_CONSTANT } from '../../services/constants';

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
  store => userSelectors.allUser(store),
  (allDiary, allUser) => {
    const currentBac = allDiary.reduce((collection, entry) => {
      const hoursFromConsumption = (parseInt(moment().format('x'), 10) - entry.time) / 3600;
      const amountDrunk = BacEngine.convertToPureAlcohol(entry.size, entry.proof);
      const { weight, age } = allUser;
      const genderConstant = GENDER_CONSTANT[allUser.gender];
      const singleBac = BacEngine.calculateBac(hoursFromConsumption, amountDrunk, weight, age, genderConstant, BAC_BURNDOWN);
      console.log(singleBac);
      return collection + 0.2;
    }, 0);

    const roundedBac = Math.round(currentBac * 1000) / 1000;

    return roundedBac;
  },
);

export {
  allEntries,
  entriesPast24hours,
  bacRightNow,
};

