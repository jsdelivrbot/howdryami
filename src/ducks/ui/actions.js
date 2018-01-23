import * as types from './types';

const hydrateUI = () => ({
  type: types.HYDRATE,
});

const loadUIData = uiData => ({
  type: types.LOAD_UI_DATA,
  data: uiData,
});


export {
  hydrateUI,
  loadUIData,
};
