import uiData from './data/ui';
import { uiOperations } from './ducks/ui';

export const loadUIData = store => {
  const { dispatch } = store;
  dispatch(uiOperations.loadUIData(uiData));
};

