import * as types from './types';

const barReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state };
      /* ... */
    default:
      return state;
  }
};

export default barReducer;
