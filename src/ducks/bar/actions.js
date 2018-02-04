import * as types from './types';

const loadBarData = barData => ({
  type: types.LOAD_BAR_DATA,
  data: barData,
});

export {
  loadBarData,
};
