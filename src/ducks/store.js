import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducerComps from './reducerComps';

const logger = createLogger({
  duration: false,
  timestamp: false,
  collapsed: true,
  logErrors: false,
  diff: false,
})

const store = createStore(
  reducerComps,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
