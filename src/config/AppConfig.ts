import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo('http://localhost:4000/api/v1', process.env.API_URL),
};
