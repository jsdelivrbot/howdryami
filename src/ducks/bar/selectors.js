import { createSelector } from 'reselect';
import * as Icons from '../../components/icons';

const allDrinks = createSelector(
  store => store.bar,
  bar => bar.drinks,
);

const availableDrinks = createSelector(
  ({ store }) => allDrinks(store),
  drinkList => drinkList.map(drink => ({ value: drink.value, label: drink.label, icon: Icons.getIconById(drink.icon) })),
);

const availableProofs = createSelector(
  ({ drinkLibrary }) => drinkLibrary,
  ({ selectedDrink }) => selectedDrink,
  (drinkLibrary, selectedDrink) => {
    if (!selectedDrink) return [];
    const { proofs } = drinkLibrary.find(drink => (drink.value === selectedDrink));
    return Object.entries(proofs).map(proofItem => ({ value: proofItem[0], label: proofItem[1] }));
  },
);

const availableSizes = createSelector(
  ({ drinkLibrary }) => drinkLibrary,
  ({ selectedDrink }) => selectedDrink,
  (drinkLibrary, selectedDrink) => {
    if (!selectedDrink) return [];
    const { sizes } = drinkLibrary.find(drink => (drink.value === selectedDrink));
    return Object.entries(sizes).map(sizeItem => ({ value: sizeItem[0], label: sizeItem[1] }));
  },
);

export {
  allDrinks,
  availableDrinks,
  availableProofs,
  availableSizes,
};

