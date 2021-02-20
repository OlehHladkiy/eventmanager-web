import { message as notify } from 'antd';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { Action } from '@store/models';
import { getReduxAction } from '@store/helpers';

import * as ApiService from './services/api';
import { UPDATE_ME } from './Actions';

function* updateMeSaga({ type, payload: { id, data } }: Action): SagaIterator {
  try {
    const response = yield call(ApiService.updateMe, id, data);

    yield put(getReduxAction(type, response?.data));
    yield call(notify.success, 'Successfully updated!');
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* userSagas(): SagaIterator {
  yield all([yield takeEvery(UPDATE_ME, updateMeSaga)]);
}

export default userSagas;
