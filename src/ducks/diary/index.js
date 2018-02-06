/* INDEX FILE

This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.

*/

import reducer from './reducers';

import * as diarySelectors from './selectors';
import * as diaryOperations from './operations';
import * as diaryActions from './actions';
import * as diaryType from './types';

export {
  diarySelectors,
  diaryOperations,
  diaryActions,
  diaryType,
};

export default reducer;
