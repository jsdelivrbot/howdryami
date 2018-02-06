import uiData from './data/ui';
import barData from './data/bar';
import { barOperations } from './ducks/bar';
import { uiOperations } from './ducks/ui';
import { userOperations } from './ducks/user';

export const loadUIData = store => {
  const { dispatch } = store;
  dispatch(uiOperations.loadUIData(uiData));
  dispatch(barOperations.loadBarData(barData));
  dispatch(userOperations.hydrateUser());
};

