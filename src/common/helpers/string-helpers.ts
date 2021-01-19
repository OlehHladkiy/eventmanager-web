import * as R from 'ramda';

export const getShortName = (name: string) =>
  R.compose(R.toUpper, R.join(''), R.map(R.head), R.split(' '))(name);
