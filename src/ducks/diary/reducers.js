import * as types from './types';

const diaryReducer = (state = [], action) => {
  switch (action.type) {
    case types.HYDRATE_DIARY:
      return [...action.data];
    case types.ADD_DIARY_ENTRY: {
      const {
        type, time, proof, size,
      } = action.data;
      const entry = {
        type, time, proof: parseInt(proof, 10), size: parseInt(size, 10),
      };
      return [...state, entry];
    }
    case types.DELETE_DIARY_ENTRY: {
      return [...state.filter(item => item.id !== action.id)];
    }
    default:
      return state;
  }
};

export default diaryReducer;
