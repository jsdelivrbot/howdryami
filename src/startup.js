import uiData from './data/ui';
import { uiOperations } from './ducks/ui';
import { userOperations } from './ducks/user';

export const loadUIData = store => {
  const { dispatch } = store;
  dispatch(uiOperations.loadUIData(uiData));
  dispatch(userOperations.hydrateUser());
};

