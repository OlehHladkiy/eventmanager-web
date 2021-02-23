import * as R from 'ramda';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import ReduxPersist from '@config/ReduxPersistConfig';
import AppSettingsReducer, {
  STATE_KEY as APP_SETTINGS_STATE_KEY,
} from '@modules/app-settings/Reducer';
import AuthReducer, {
  STATE_KEY as AUTH_STATE_KEY,
} from '@modules/auth/Reducer';
import RouterReducer, {
  STATE_KEY as ROUTER_STATE_KEY,
} from '@modules/router/Reducer';
import UserReducer, {
  STATE_KEY as USER_STATE_KEY,
} from '@modules/user/Reducer';
import EventReducer, {
  STATE_KEY as EVENT_STATE_KEY,
} from '@modules/event/Reducer';

const persist = R.curry(persistReducer)(ReduxPersist.storeConfig);

export default (history: any) =>
  R.compose(
    persist,
    combineReducers,
    R.assoc(ROUTER_STATE_KEY, RouterReducer(history)),
    R.assoc(APP_SETTINGS_STATE_KEY, AppSettingsReducer),
    R.assoc(AUTH_STATE_KEY, AuthReducer),
    R.assoc(USER_STATE_KEY, UserReducer),
    R.assoc(EVENT_STATE_KEY, EventReducer),
  )({});
