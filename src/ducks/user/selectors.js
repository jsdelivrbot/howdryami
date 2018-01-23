import { createSelector } from 'reselect';

const age = createSelector(
  store => store.user,
  user => user.age,
);

const weight = createSelector(
  store => store.user,
  user => user.weight,
);

const height = createSelector(
  store => store.user,
  user => user.height,
);

const gender = createSelector(
  store => store.user,
  user => user.gender,
);


export {
  age,
  weight,
  height,
  gender,
};
