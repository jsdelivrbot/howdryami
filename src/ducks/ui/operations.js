import * as actions from './actions';

const hydrateUI = () => dispatch => {
  dispatch(actions.hydrateUI()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

export {
  hydrateUI,
};
