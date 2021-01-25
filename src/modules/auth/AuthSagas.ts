import { message as notify } from 'antd';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { Action } from '@store/models';
import { getReduxAction } from '@store/helpers';

import { SIGN_IN, SIGN_UP, SIGN_OUT } from './AuthActions';
import * as ApiService from './services/apiService';

function* signInSuccessSaga(): SagaIterator {
  yield put(push('/'));
}

function* signInFailSaga(err: any): SagaIterator {
  yield call(
    notify.error,
    R.pathOr('Email or Password is incorrect', ['error', '0', 'message'], err),
  );
}

function* signOutSaga(): SagaIterator {
  yield put(push('/signin'));
}

function* signInSaga({ type, payload }: Action): SagaIterator {
  try {
    const response = yield call(ApiService.signIn, payload);

    yield put(getReduxAction(type, response?.data));
    yield call(signInSuccessSaga);
    yield call(notify.success, 'Successfully signed in!');
  } catch (err) {
    yield put(getReduxAction(type));
    yield call(signInFailSaga, err);
  }
}

function* signUpSaga({ type, payload }: Action): SagaIterator {
  try {
    const response = yield call(ApiService.signUp, payload);

    yield put(getReduxAction(type, response?.data));
    yield call(signInSuccessSaga);
    yield call(notify.success, 'Successfully signed up!');
  } catch (err) {
    yield put(getReduxAction(type));
    yield call(signInFailSaga, err);
  }
}

function* authSagas(): SagaIterator {
  yield all([
    yield takeEvery(SIGN_IN, signInSaga),
    yield takeEvery(SIGN_UP, signUpSaga),
    yield takeEvery(SIGN_OUT, signOutSaga),
  ]);
}

export default authSagas;
