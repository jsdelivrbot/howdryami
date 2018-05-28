import { createSelector } from 'reselect';

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
)

export {
  genderListSelector,
  diaryEditContainerToShowSelector,
  confirmModalOptionsSelector,
  drawerSelector,
};

