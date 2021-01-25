import axios from 'axios';
import * as R from 'ramda';
import { Action, MiddlewareAPI } from 'redux';

const axiosMiddleware = ({ getState }: MiddlewareAPI) => (next: any) => (
  action: Action,
) => {
  axios.interceptors.request.use(
    (config) => {
      const store = getState();
      config.headers.Authentication = R.pathOr('', ['auth', 'token'], store);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  next(action);
};

export default axiosMiddleware;
