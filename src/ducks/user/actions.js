import * as types from './types';

const hydrateUser = user => ({
  type: types.HYDRATE,
  user,
});

const registerUser = user => ({
  type: types.REGISTER,
  user,
});


export {
  hydrateUser,
  registerUser,
};
