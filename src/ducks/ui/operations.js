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

const toggleDiaryEditContainer = id => dispatch => {
  dispatch(actions.toggleDiaryEditContainer(id));
};

const toggleConfirmModal = options => dispatch => {
  dispatch(actions.toggleConfirmModal(options));
};

export {
  hydrateUI,
  loadUIData,
  toggleDiaryEditContainer,
  toggleConfirmModal,
};
