import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import bar from './bar';
import user from './user';
import ui from './ui';
import diary from './diary';

export default combineReducers({
  bar,
  user,
  ui,
  diary,
  form,
});
