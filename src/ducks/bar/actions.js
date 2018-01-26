import * as types from './types';

const hydrateBar = () => ({
  type: types.HYDRATE,
});

const loadBarData = barData => ({
  type: types.LOAD_BAR_DATA,
  data: barData,
})


export {
  hydrateBar,
  loadBarData,
};
