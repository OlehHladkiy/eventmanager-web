import { REHYDRATE } from 'redux-persist';
import { SagaIterator } from 'redux-saga';
import { all, fork, put, select, take } from 'redux-saga/effects';

import { SIGN_IN } from '@modules/auth/Actions';
import { getIsAuthenticated } from '@modules/auth/Reducer';

import { appAuthenticated } from './Actions';

function* appAuthenticatedSaga(): SagaIterator {
  // eslint-disable-next-line fp/no-loops
  while (true) {
    yield take([REHYDRATE, `${SIGN_IN}_SUCCESS`]);
    const isAuthenticated = yield select(getIsAuthenticated);

    if (isAuthenticated) {
      yield put(appAuthenticated());
    }
  }
}

function* appSagas(): SagaIterator {
  yield all([fork(appAuthenticatedSaga)]);
}

export default appSagas;
