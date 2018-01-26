import { createSelector } from 'reselect';

const allDrinks = createSelector(
  store => store.bar,
  bar => bar.drinks,
);

export {
  allDrinks,
};

