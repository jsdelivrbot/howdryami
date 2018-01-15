import { combineReducers } from 'redux';

import drink from './drink';
import user from './user';
import ui from './ui';

export default combineReducers({
  drink,
  user,
  ui,
});
