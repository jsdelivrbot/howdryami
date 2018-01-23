import { STORAGE_KEY } from './constants';

class API {
  static saveStateToLocal = store => {
    const stateAsJSON = JSON.stringify(store.getState());
  }
}

export default API;
