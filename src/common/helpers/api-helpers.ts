import * as R from 'ramda';
import qs from 'query-string';

export const getUrlWithParams = (url: string, params: Record<string, any>) =>
  R.isEmpty(params) ? url : `${url}?${qs.stringify(params)}`;
