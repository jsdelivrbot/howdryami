import * as actions from './actions';
import API from '../../services/api';

import { USER_HYDRATION_EMPTY, USER_HYDRATION_HAS_DATA } from './types';

/** Load the user from local storage and try to hydrate if
 * any user was available. If not, the reducer will default the state.
 */
const inflateUser = () => dispatch => {
  dispatch(actions.inflateUser());
};

/** Load the user from local storage and try to hydrate if
 * any user was available. If not, the reducer will default the state.
 */
const hydrateUser = () => dispatch => (
  new Promise(resolve => {
    API.loadUserFromLocal()
      .then(user => {
        if (user) {
          dispatch(actions.hydrateUser(user));
          resolve(USER_HYDRATION_HAS_DATA);
        } else {
          dispatch(inflateUser());
          resolve(USER_HYDRATION_EMPTY);
        }
      });
  })
);

/** Save the user to local storage and dispatch.
 * @param user
 */
const registerUser = user => dispatch => {
  API.saveUserToLocal(user).then(() => {
    dispatch(actions.registerUser(user));
  });
};

const clearUserData = () => dispatch => {
  API.clearAllUserData().then(() => {
    dispatch(actions.clearUserData);
  });
};

export {
  inflateUser,
  hydrateUser,
  registerUser,
  clearUserData,
};
