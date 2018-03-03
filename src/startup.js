import uiData from './data/ui';
import barData from './data/bar';
import { barOperations } from './ducks/bar';
import { uiOperations } from './ducks/ui';
import { userOperations } from './ducks/user';
import { diaryOperations } from './ducks/diary';

export const loadUIData = store => {
  const { dispatch } = store;
  Promise.all([
    dispatch(uiOperations.loadUIData(uiData)),
    dispatch(barOperations.loadBarData(barData)),
    dispatch(userOperations.hydrateUser()),
    dispatch(diaryOperations.hydrateDiary()),
  ]).then(allReturnStatuses => {
    console.log(allReturnStatuses);
  });
};
