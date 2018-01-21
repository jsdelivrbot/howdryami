import * as actions from './actions';

const hydrateUser = () => dispatch => {
  dispatch(actions.hydrateUser()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

const registerUser = user => dispatch => {
  dispatch(actions.registerUser(user));
};

export {
  hydrateUser,
  registerUser,
};
