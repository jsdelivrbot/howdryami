import * as actions from './actions';

const hydrateUser = () => dispatch => {
  dispatch(actions.hydrateUser()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

export {
  hydrateUser,
};
