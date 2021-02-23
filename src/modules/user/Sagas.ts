import { message as notify } from 'antd';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { Action } from '@store/models';
import { getReduxAction } from '@store/helpers';

import { UPDATE_ME } from './Actions';
import * as ApiService from './services/api';

function* updateMeSaga({ type, payload }: Action): SagaIterator {
  try {
    const { data } = yield call(ApiService.updateMe, payload);

    yield put(getReduxAction(type, data));
    yield call(notify.success, 'Successfully updated!');
  } catch (err) {
    yield put(getReduxAction(type));
  }
}

function* userSagas(): SagaIterator {
  yield all([yield takeEvery(UPDATE_ME, updateMeSaga)]);
}

export default userSagas;
