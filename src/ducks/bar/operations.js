import * as actions from './actions';

const hydrateBar = () => dispatch => {
  dispatch(actions.hydrateBar());
};

const loadBarData = barData => dispatch => {
  dispatch(actions.loadBarData(barData));
};

export {
  hydrateBar,
  loadBarData,
};
