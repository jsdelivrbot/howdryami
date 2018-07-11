import * as types from './types';

const uiReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state };
      /* ... */
    case types.LOAD_UI_DATA:
      return { ...state, genders: action.data.genders };
    case types.TOGGLE_DIARYEDIT_CONTAINER: {
      const newID = state.diaryEditContainerToShow === action.data ? '' : action.data;
      return { ...state, diaryEditContainerToShow: newID };
    }
    case types.TOGGLE_CONFIRM_MODAL: {
      return { ...state, confirmModalOptions: action.data };
    }
    case types.TOGGLE_DRAWER: {
      const newDrawerState = state.drawer ? !state.drawer.isDrawerOpen : false;
      return { ...state, drawer: { ...state.drawer, isDrawerOpen: newDrawerState } };
    }
    case types.SAVE_DIARY_DEFAULTS: {
      return { ...state, diaryDefaults: { ...action.data } };
    }
    default:
      return state;
  }
};

export default uiReducer;
