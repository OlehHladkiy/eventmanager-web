import { message as notify } from 'antd';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';

import { Action } from '@store/models';
import { getReduxAction } from '@store/helpers';

import * as ApiService from './services/api';
import {
  GET_EVENT,
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  setIsLoading,
} from './Actions';

function* getEventSaga({ type, payload }: Action): SagaIterator {
  try {
    yield put(setIsLoading(true));
    const { data } = yield call(ApiService.getEvent, payload);
    yield put(setIsLoading(false));

    yield put(getReduxAction(type, data));
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* getEventsSaga({ type, payload }: Action): SagaIterator {
  try {
    yield put(setIsLoading(true));
    const { data } = yield call(ApiService.getEvents, payload);
    yield put(setIsLoading(false));

    yield put(getReduxAction(type, data));
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* createEventSaga({ type, payload }: Action): SagaIterator {
  try {
    yield put(setIsLoading(true));
    const { data } = yield call(ApiService.createEvent, payload);
    yield put(setIsLoading(false));

    yield put(getReduxAction(type, data));
    yield call(notify.success, `${data.title} was successfully created`);
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* updateEventSaga({ type, payload }: Action): SagaIterator {
  try {
    yield put(setIsLoading(true));
    const { data } = yield call(ApiService.updateEvent, payload);
    yield put(setIsLoading(false));

    yield put(getReduxAction(type, data));
    yield call(notify.success, `${data.title} was successfully updated`);
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* eventSagas(): SagaIterator {
  yield all([
    yield takeEvery(GET_EVENT, getEventSaga),
    yield takeEvery(GET_EVENTS, getEventsSaga),
    yield takeEvery(CREATE_EVENT, createEventSaga),
    yield takeEvery(UPDATE_EVENT, updateEventSaga),
  ]);
}

export default eventSagas;
