import { combineReducers } from 'redux';

import bar from './bar';
import user from './user';
import ui from './ui';

export default combineReducers({
  bar,
  user,
  ui,
});
