import { createSelector } from 'reselect';
import moment from 'moment';

import { barSelectors } from '../bar';
import { userSelectors } from '../user';

import BacEngine from '../../services/bacEngine';
import { BAC_BURNDOWN, GENDER_CONSTANT } from '../../helpers/constants';

const MILLISECONDS_IN_A_DAY = 86400000;

const allEntries = createSelector(
  store => store.diary,
  diary => diary.sort((a, b) => a.time < b.time),
);

/** Get all entries for the past 24 hours, as we assume that any older
 * drinks consumed has been burned by now and won't affect any BAC calculations
 *
 * @return Array A list of drink objects consumed.
 */
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

/** Calculate the current BAC based on all previous drinks. Assume that any drink from 24
 * hours or more has been burned by now, so don't bring in any older drinks than that.
 *
 * @return Float The BAC number of all summed drinks.
 */
const bacRightNow = createSelector(
  store => entriesPast24hours(store),
  store => userSelectors.allUser(store),
  (allDiary, allUser) => {
    const currentBac = allDiary.reduce((collection, entry) => {
      const hoursFromConsumption = (parseInt(moment().format('x'), 10) - entry.time) / 3600000;
      const consumptionInGrams = BacEngine.convertToPureAlcohol(entry.size, entry.proof);
      const { weight, age } = allUser;
      const genderConstant = GENDER_CONSTANT[allUser.gender];
      const bacData = {
        hoursFromConsumption,
        consumptionInGrams,
        bodyWeightInGrams: weight * 1000,
        age,
        genderConstant,
        burndown: BAC_BURNDOWN,
      };

      const singleBac = BacEngine.calculateSingleBac(bacData);
      return collection + singleBac;
    }, 0);

    return Math.round(currentBac * 100) / 100; // Round, but keep 2 places.
  },
);

export {
  allEntries,
  entriesPast24hours,
  bacRightNow,
};

