import * as types from './types';

const diaryReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE_DIARY:
      return [...action.data];
    default:
      return state;
  }
};

export default diaryReducer;
