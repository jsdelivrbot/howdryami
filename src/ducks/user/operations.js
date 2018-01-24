import * as actions from './actions';
import API from '../../services/api';

/** Load the user from local storage and try to hydrate if
 * any user was available. If not, the reducer will default the state.
 */
const inflateUser = () => dispatch => {
  dispatch(actions.inflateUser());
};

/** Load the user from local storage and try to hydrate if
 * any user was available. If not, the reducer will default the state.
 */
const hydrateUser = () => dispatch => {
  API.loadUserFromLocal().then(user => {
    if (user) {
      dispatch(actions.hydrateUser(user));
    } else {
      dispatch(inflateUser());
    }
  });
};

/** Save the user to local storage and dispatch.
 * @param user
 */
const registerUser = user => dispatch => {
  API.saveUserToLocal(user).then(data => {
    dispatch(actions.registerUser(user));
  });
};

export {
  inflateUser,
  hydrateUser,
  registerUser,
};
