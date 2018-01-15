/* INDEX FILE

This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.

*/

import reducer from './reducers';

import * as uiSelectors from './selectors';
import * as uiOperations from './operations';
import * as uiActions from './actions';
import * as uiType from './types';

export {
  uiSelectors,
  uiOperations,
  uiActions,
  uiType,
};

export default reducer;
