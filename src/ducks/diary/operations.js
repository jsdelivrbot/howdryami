import API from '../../services/api';
import * as actions from './actions';

const hydrateDiary = () => dispatch => {
  API.loadDiaryFromLocal().then(diary => {
    if (diary) {
      dispatch(actions.hydrateDiary(diary));
    }
  });
};

export {
  hydrateDiary,
};
