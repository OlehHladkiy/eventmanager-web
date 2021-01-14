import { message as notify } from 'antd';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { Action } from '@store/models';
import { getReduxAction } from '@store/helpers';

import { SIGN_IN, SIGN_UP, SIGN_OUT } from './AuthActions';
import * as AuthServices from './AuthServices';

function* signInSuccessSaga(): SagaIterator {
  yield put(push('/'));
}

function* signInFailSaga(action: Action): SagaIterator {
  yield call(
    notify.error,
    R.pathOr(
      'Email or Password is incorrect',
      ['error', '0', 'message'],
      action,
    ),
  );
}

function* signOutSaga(): SagaIterator {
  yield put(push('/signin'));
}

function* signInSaga(action: Action): SagaIterator {
  try {
    const payload = yield call(AuthServices.signIn, action.payload);

    yield put(getReduxAction(action.type, payload?.data));
    yield call(signInSuccessSaga);
    yield call(notify.success, 'Successfully signed in!');
  } catch (err) {
    yield put(getReduxAction(action.type));
    yield call(signInFailSaga, action);
  }
}

function* signUpSaga(action: Action): SagaIterator {
  try {
    const payload = yield call(AuthServices.signUp, action.payload);

    yield put(getReduxAction(action.type, payload));
    yield call(signInSuccessSaga);
    yield call(notify.success, 'Successfully signed up!');
  } catch (err) {
    yield put(getReduxAction(action.type));
    yield call(signInFailSaga, action);
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
