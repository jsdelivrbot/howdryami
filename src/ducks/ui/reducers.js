import * as types from './types';

const uiReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state };
      /* ... */
    default:
      return state;
  }
};

export default uiReducer;
