import * as types from './types';

const defaultUser = {
  age: 35,
  gender: types.GENDERS.MALE,
  height: 170,
  weight: 75,
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INFLATE:
      return { ...state, ...defaultUser };
    case types.HYDRATE:
      console.log('hydrating user', action.user);
      return { ...state, ...action.user };
      /* ... */
    case types.REGISTER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default userReducer;
