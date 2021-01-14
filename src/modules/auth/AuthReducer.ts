import * as R from 'ramda';

import { SIGN_UP, SIGN_OUT, SIGN_IN } from './AuthActions';

export const STATE_KEY = 'auth';

export type AuthState = {
  id?: string | null;
  email?: string | null;
  token?: string | null;
  isAuthenticated: boolean;
};

export const initialState: AuthState = {
  id: null,
  email: null,
  token: null,
  isAuthenticated: false,
};

const buildAuthData = (
  user: Record<string, any> = {},
): Record<string, any> => ({
  ...R.pick(['id', 'email', 'token'], user),
  isAuthenticated: true,
});

const AuthReducer = (
  state: AuthState = initialState,
  action: any,
): AuthState => {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`: {
      const authData = buildAuthData(action.payload);
      return R.mergeDeepRight(state, authData);
    }
    case SIGN_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getMyId = R.path([STATE_KEY, 'id']);

export const getToken = R.path([STATE_KEY, 'token']);

export const getIsAuthenticated = R.path([STATE_KEY, 'isAuthenticated']);

export const getEmail = R.path([STATE_KEY, 'email']);

export default AuthReducer;
