import * as R from 'ramda';

import { SIGN_OUT } from '@modules/auth/AuthActions';

import { SET_IS_LOADING } from './AppSettingsActions';

export const STATE_KEY = 'system-settings';

export interface AppSettingsState {
  isLoading: boolean;
}

const initialState: AppSettingsState = {
  isLoading: false,
};

export const Reducer = (
  state: AppSettingsState = initialState,
  { type, payload }: any,
) => {
  switch (type) {
    case SET_IS_LOADING: {
      return R.assoc('isLoading', payload, state);
    }
    case SIGN_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getIsLoading = R.path([STATE_KEY, 'isLoading']);

export default Reducer;
