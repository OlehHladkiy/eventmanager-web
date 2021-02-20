import * as R from 'ramda';

import { SIGN_IN, SIGN_UP, SIGN_OUT } from '@modules/auth/Actions';

import { UPDATE_ME } from './Actions';

export const STATE_KEY = 'user';

export interface UserState {
  id?: string | null;
  email?: string | null;
  password?: string | null;
  name?: string | null;
  created_at: Date | string | null;
  modified_at: Date | string | null;
}

const initialState: UserState = {
  id: null,
  email: null,
  password: null,
  name: null,
  created_at: null,
  modified_at: null,
};

const Reducer = (
  state: UserState = initialState,
  { type, payload }: any,
): UserState => {
  switch (type) {
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`: {
      return R.mergeDeepRight(state, payload?.user);
    }
    case `${UPDATE_ME}_SUCCESS`: {
      return R.mergeDeepRight(state, payload);
    }
    case SIGN_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getUser = R.prop(STATE_KEY);

export const getMyId = R.pathOr('', [STATE_KEY, 'id']);

export const getEmail = R.path([STATE_KEY, 'email']);

export const getEmailNotifications = R.pathOr({}, [
  STATE_KEY,
  'emailNotifications',
]);

export const getRole = R.path([STATE_KEY, 'profile', 'role']);

export const getName = R.path([STATE_KEY, 'name']);

export const getAvatar = R.path([STATE_KEY, 'avatar']);

export const getCreatedDate = R.path([STATE_KEY, 'createdAt']);

export default Reducer;
