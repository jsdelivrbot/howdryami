import * as types from './types';

const inflateUser = user => ({
  type: types.INFLATE,
  user,
});

const hydrateUser = user => ({
  type: types.HYDRATE,
  user,
});

const registerUser = user => ({
  type: types.REGISTER,
  user,
});

const clearUserData = () => ({
  type: types.CLEAR_DATA,
});

export {
  inflateUser,
  hydrateUser,
  registerUser,
  clearUserData,
};
