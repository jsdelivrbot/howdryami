import * as types from './types';

const hydrateUI = () => ({
  type: types.HYDRATE,
});

const loadUIData = uiData => ({
  type: types.LOAD_UI_DATA,
  data: uiData,
});

const toggleDiaryEditContainer = id => ({
  type: types.TOGGLE_DIARYEDIT_CONTAINER,
  data: id,
});

const toggleConfirmModal = options => ({
  type: types.TOGGLE_CONFIRM_MODAL,
  data: options,
});

const toggleDrawer = () => ({
  type: types.TOGGLE_DRAWER,
});

const saveDiaryUIDefaults = diaryDefaults => ({
  type: types.SAVE_DIARY_DEFAULTS,
  data: diaryDefaults,
});

export {
  hydrateUI,
  loadUIData,
  toggleDiaryEditContainer,
  toggleConfirmModal,
  toggleDrawer,
  saveDiaryUIDefaults,
};
