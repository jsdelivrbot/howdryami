import * as types from './types';

const barReducer = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_BAR_DATA:
      return { ...state, drinks: [...action.data] };
      /* ... */
    default:
      return state;
  }
};

export default barReducer;
