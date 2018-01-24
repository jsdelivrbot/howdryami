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


export {
  inflateUser,
  hydrateUser,
  registerUser,
};
