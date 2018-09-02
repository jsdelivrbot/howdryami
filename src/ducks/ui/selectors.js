import { createSelector } from 'reselect';
import moment from 'moment';

const genderListSelector = createSelector(
  store => store.ui.genders,
  genders => genders,
);

const diaryEditContainerToShowSelector = createSelector(
  store => store.ui.diaryEditContainerToShow,
  diaryEditContainerToShow => diaryEditContainerToShow,
);

const confirmModalOptionsSelector = createSelector(
  store => store.ui.confirmModalOptions,
  confirmModalOptions => confirmModalOptions || {},
);

const drawerSelector = createSelector(
  store => store.ui.drawer,
  drawer => drawer || {},
);

const diaryDefaultsSelector = createSelector(
  store => store.ui.diaryDefaults || { type: 'COCKTAIL', size: '15', proof: '6' },
  diaryDefaults => {
    const roundedTimeStamp = parseInt(moment().format('X'), 10) * 1000;
    return { ...diaryDefaults, time: roundedTimeStamp };
  },
);

export {
  genderListSelector,
  diaryEditContainerToShowSelector,
  confirmModalOptionsSelector,
  drawerSelector,
  diaryDefaultsSelector,
};

