import * as types from './types';

const hydrateDiary = diaryData => ({
  type: types.HYDRATE_DIARY,
  data: diaryData,
});

export {
  hydrateDiary,
};
