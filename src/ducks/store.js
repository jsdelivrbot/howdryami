import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducerComps from './reducerComps';

const store = createStore(
  reducerComps,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
