import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import appSagas from '@modules/app/Sagas';
import authSagas from '@modules/auth/Sagas';
import userSagas from '@modules/user/Sagas';
import eventSagas from '@modules/event/Sagas';

function* rootSaga(): SagaIterator {
  yield all([
    fork(appSagas),
    fork(authSagas),
    fork(userSagas),
    fork(eventSagas),
  ]);
}

export default rootSaga;
