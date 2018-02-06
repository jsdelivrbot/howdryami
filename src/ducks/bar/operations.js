import * as actions from './actions';

const loadBarData = barData => dispatch => {
  dispatch(actions.loadBarData(barData));
};

export {
  loadBarData,
};
