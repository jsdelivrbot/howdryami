import * as actions from './actions';

const hydrateUI = () => dispatch => {
  dispatch(actions.hydrateUI()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

const loadUIData = uiData => dispatch => {
  dispatch(actions.loadUIData(uiData));
};

export {
  hydrateUI,
  loadUIData,
};
