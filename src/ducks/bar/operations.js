import * as actions from './actions';

const hydrateBar = () => dispatch => {
  dispatch(actions.hydrateDrinks()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

export {
  hydrateBar,
};
