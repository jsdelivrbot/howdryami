import * as actions from './actions';
import { UI_DATA_IS_LOADED } from './types';

const hydrateUI = () => dispatch => {
  dispatch(actions.hydrateUI()).then(() => {
    // dispatch(actions.swim(distance));
    // dispatch(/* any action */);
  });
};

const loadUIData = uiData => dispatch => (
  new Promise(resolve => {
    dispatch(actions.loadUIData(uiData));
    resolve(UI_DATA_IS_LOADED);
  })
);

const toggleDiaryEditContainer = id => dispatch => {
  dispatch(actions.toggleDiaryEditContainer(id));
};

const toggleDrawer = () => dispatch => {
  dispatch(actions.toggleDrawer());
};

const toggleConfirmModal = options => dispatch => {
  dispatch(actions.toggleConfirmModal(options));
};

export {
  hydrateUI,
  loadUIData,
  toggleDiaryEditContainer,
  toggleConfirmModal,
  toggleDrawer,
};
