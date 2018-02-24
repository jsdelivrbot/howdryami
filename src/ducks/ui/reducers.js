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
    default:
      return state;
  }
};

export default uiReducer;
