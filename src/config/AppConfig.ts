import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo('/api/v1', process.env.API_URL),
};
