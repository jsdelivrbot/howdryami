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
  static saveDiaryToLocal = diary => (localforage.setItem('diary', diary));
  static loadUserFromLocal = () => (localforage.getItem('user'));
  static loadDiaryFromLocal = () => (localforage.getItem('diary'));
}

export default API;
