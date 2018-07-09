import * as types from './types';

const diaryReducer = (state = [], action) => {
  switch (action.type) {
    case types.HYDRATE_DIARY:
      return [...action.data];
    case types.ADD_DIARY_ENTRY: {
      const {
        id, type, time, proof, size,
      } = action.data;
      const entry = {
        id, type, time, proof: parseInt(proof, 10), size: parseInt(size, 10),
      };
      return [...state, entry];
    }
    case types.UPDATE_DIARY_ENTRY: {
      const {
        id, type, time, proof, size,
      } = action.data;
      const entry = {
        id, type, time, proof: parseInt(proof, 10), size: parseInt(size, 10),
      };

      return [...state.filter(item => item.id !== id), entry];
    }
    case types.DELETE_DIARY_ENTRY: {
      console.log('id to delete', action.data);
      return [...state.filter(item => item.id !== action.data)];
    }
    default:
      return state;
  }
};

export default diaryReducer;
