import * as R from 'ramda';

import { SIGN_IN, SIGN_UP, SIGN_OUT } from '@modules/auth/AuthActions';

export const STATE_KEY = 'user';

export interface UserState {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  created_at: Date | string | null;
  modified_at: Date | string | null;
}

const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  created_at: null,
  modified_at: null,
};

const UserReducer = (
  state: UserState = initialState,
  action: any,
): UserState => {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
    case `${SIGN_UP}_SUCCESS`: {
      const user = R.compose(
        R.dissoc('password'),
        R.pathOr({}, ['payload', 'user']),
      )(action);
      return R.mergeDeepRight(state, user);
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

export default UserReducer;
