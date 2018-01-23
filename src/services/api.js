import localforage from 'localforage';
import { STORAGE_KEY } from './constants';

localforage.config({
  name: 'howdryami',
  version: 1.0,
  size: 4980736,
  storeName: STORAGE_KEY,
});


class API {
  static saveUserToLocal = user => (localforage.setItem('user', user));

  static loadUserFromLocal = user => (localforage.getItem('user'));
}

export default API;
