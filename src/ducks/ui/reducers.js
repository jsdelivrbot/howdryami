import * as types from './types';

const uiReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state };
      /* ... */
    case types.LOAD_UI_DATA:
      return { ...state, genders: action.data.genders };
    default:
      return state;
  }
};

export default uiReducer;
