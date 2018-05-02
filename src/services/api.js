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
  static saveDiaryToLocal = newDiaryItem => (
    localforage
      .getItem('diary')
      .then(response => {
        const diaryList = response || [];
        localforage.setItem('diary', [...diaryList, newDiaryItem]);
      })
  );
  static deleteDiaryFromLocal = id => (
    localforage
      .getItem('diary')
      .then(response => {
        const diaryList = response || [];
        localforage.setItem('diary', diaryList.filter(item => item.id !== id));
      })
  );
  static loadUserFromLocal = () => (localforage.getItem('user'));
  static loadDiaryFromLocal = () => (localforage.getItem('diary'));
  static clearAllUserData = () => (localforage.clear());
}

export default API;
