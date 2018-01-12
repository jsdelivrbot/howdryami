/* INDEX FILE

This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.

*/

import reducer from './reducers';

import * as drinkSelectors from './selectors';
import * as drinkOperators from './operations';
import * as drinkActions from './actions';
import * as drinkType from './types';

export {
  drinkSelectors,
  drinkOperators,
  drinkActions,
  drinkType,
};

export default reducer;
