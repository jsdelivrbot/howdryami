import * as actions from './actions';
import { BAR_DATA_IS_LOADED } from './types';

const loadBarData = barData => dispatch => (
  new Promise(resolve => {
    dispatch(actions.loadBarData(barData));
    resolve(BAR_DATA_IS_LOADED);
  })
);

export {
  loadBarData,
};
