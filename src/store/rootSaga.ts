import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import appSagas from '@modules/app/AppSagas';
import authSagas from '@modules/auth/AuthSagas';
import userSagas from '@modules/user/UserSagas';

function* rootSaga(): SagaIterator {
  yield all([fork(appSagas), fork(authSagas), fork(userSagas)]);
}

export default rootSaga;
