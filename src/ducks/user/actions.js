import * as types from './types';

const hydrateUser = () => ({
  type: types.HYDRATE,
});

const registerUser = user => ({
  type: types.REGISTER,
  user,
});


export {
  hydrateUser,
  registerUser,
};
