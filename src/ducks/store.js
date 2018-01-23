import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import API from '../services/api';
import reducerComps from './reducerComps';

const store = createStore(
  reducerComps,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

store.subscribe(() => API.saveStateToLocal(store));

export default store;
