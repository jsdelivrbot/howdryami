import * as types from './types';

const userReducer = (state = false, action) => {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state };
      /* ... */
    case types.REGISTER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default userReducer;
