import { UPDATE_ME } from '@modules/user/Actions';
import * as R from 'ramda';

import { SIGN_UP, SIGN_OUT, SIGN_IN } from './Actions';

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
  payload: Record<string, any> = {},
): Record<string, any> => ({
  ...R.pick(['id', 'email'], payload?.user ?? {}),
  token: payload?.token,
  isAuthenticated: true,
});

const Reducer = (
  state: AuthState = initialState,
  { type, payload }: any,
): AuthState => {
  switch (type) {
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`: {
      const authData = buildAuthData(payload);
      return R.mergeDeepRight(state, authData);
    }
    case `${UPDATE_ME}_SUCCESS`: {
      return R.assoc('email', payload?.email, state);
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

export default Reducer;
