import { createSelector } from 'reselect';

const DEFAULT_USER = {
  gender: 'MALE',
  age: 34,
  weight: 75,
  height: 180,
};

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

const allUser = createSelector(
  store => store.user,
  user => user || DEFAULT_USER,
);


export {
  age,
  weight,
  height,
  gender,
  allUser,
};
