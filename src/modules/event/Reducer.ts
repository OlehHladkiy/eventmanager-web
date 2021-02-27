import moment from 'moment';
import * as R from 'ramda';

import { SIGN_OUT } from '@modules/auth/Actions';

import {
  GET_EVENT,
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  SET_IS_LOADING,
} from './Actions';
import { EVENT_DETAILS_FIELDS, EVENT_BASIC_INFO_FIELDS } from './models';

export const STATE_KEY = 'event';

export interface EventState {
  data: Record<string, any>;
  isLoading: boolean;
}

const initialState: EventState = {
  data: {},
  isLoading: false,
};

const Reducer = (
  state: EventState = initialState,
  { type, payload }: any,
): EventState => {
  switch (type) {
    case `${CREATE_EVENT}_SUCCESS`:
    case `${UPDATE_EVENT}_SUCCESS`:
    case `${GET_EVENT}_SUCCESS`: {
      return R.assocPath(['data', payload?.id], payload, state);
    }
    case `${GET_EVENTS}_SUCCESS`: {
      const events = R.indexBy(R.prop('id'), payload);
      return R.assoc('data', events, state);
    }
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

export const getEvents = R.compose(R.values, R.path([STATE_KEY, 'data']));

export const getEvent = (state: EventState, id: string) =>
  R.path([STATE_KEY, 'data', id], state);

export const getEventDetails = (state: EventState, id: string) =>
  R.compose(
    (event: any) => ({
      ...event,
      starts_at: event.starts_at ? moment(event.starts_at) : null,
      ends_at: event.ends_at ? moment(event.ends_at) : null,
    }),
    R.pick(EVENT_DETAILS_FIELDS),
    R.defaultTo({}),
  )(getEvent(state, id));

export const getEventBasicInfo = (state: EventState, id: string) =>
  R.compose(
    R.pick(EVENT_BASIC_INFO_FIELDS),
    R.defaultTo({}),
  )(getEvent(state, id));

export const getIsLoading = R.path([STATE_KEY, 'isLoading']);

export default Reducer;
