import localforage from 'localforage';
import { STORAGE_KEY } from '../helpers/constants';

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
        const filteredDiaryList = diaryList.filter(item => item.id !== newDiaryItem.id);
        localforage.setItem('diary', [...filteredDiaryList, newDiaryItem]);
      })
  );
  static fetchDiaryFromLocal = diaryID => (
    localforage
      .getItem('diary')
      .then(response => {
        const diaryList = response || [];
        return diaryList.find(item => item.id === diaryID) || [];
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
  static replaceDiaryToLocal = newDiary => localforage.setItem('diary', newDiary);
  static loadUserFromLocal = () => (localforage.getItem('user'));
  static loadDiaryFromLocal = () => (localforage.getItem('diary'));
  static clearAllUserData = () => (localforage.clear());
}

export default API;
