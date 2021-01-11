import axios from 'axios';
import * as R from 'ramda';
import { Action, MiddlewareAPI } from 'redux';

const promiseMiddleware = ({ getState }: MiddlewareAPI) => (next: any) => (
  action: Action,
) => {
  const store = getState();

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authentication = R.pathOr('', ['auth', 'token'], store);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  next(action);
};

export default promiseMiddleware;
