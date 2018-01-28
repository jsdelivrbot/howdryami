import { createSelector } from 'reselect';
import * as Icons from '../../components/icons';

const allDrinks = createSelector(
  store => store.bar,
  bar => bar.drinks,
);

const availableDrinks = createSelector(
  ({ store }) => allDrinks(store),
  drinkList => drinkList.map(drink => ({ value: drink.id, label: drink.label, icon: Icons.getIconById(drink.icon) })),
)

const availableProofs = createSelector(
  ({ store }) => allDrinks(store),
  ({ drink }) => drink,
  (drinkList, selectedDrink) => Object.entries(drinkList.find(drink => (drink.id === selectedDrink)).proofs)
    .map(sizeItem => ({ value: sizeItem[0], label: sizeItem[1] })),
)

const availableSizes = createSelector(
  ({ store }) => allDrinks(store),
  ({ drink }) => drink,
  (drinkList, selectedDrink) => Object.entries(drinkList.find(drink => (drink.id === selectedDrink)).sizes)
    .map(sizeItem => ({ value: sizeItem[0], label: sizeItem[1] })),
)

export {
  allDrinks,
  availableProofs,
  availableSizes,
};

