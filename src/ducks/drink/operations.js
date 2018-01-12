import * as actions from './actions';

const hydrateDrinks = distance => dispatch => {
  dispatch(actions.hydrateDrinks()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

export {
  hydrateDrinks,
};
