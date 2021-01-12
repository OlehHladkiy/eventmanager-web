import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import loggerMiddleware from './middlewares/loggerMiddleware';
import promiseMiddleware from './middlewares/promiseMiddleware';
import axiosMiddleware from './middlewares/axiosMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __PRELOADED_STATE__: Record<string, any>;
    __store__: Record<string, any>;
  }
}

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default () => {
  // const history = createHistory();
  const history = isServer
    ? createMemoryHistory({ initialEntries: ['/'] })
    : createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();

  const initialState: any = !isServer ? window.__PRELOADED_STATE__ || {} : {};

  const middlewares = [
    routerMiddleware(history),
    thunk,
    axiosMiddleware,
    promiseMiddleware,
    sagaMiddleware,
  ];

  if (!isServer && typeof jest === 'undefined') {
    middlewares.push(loggerMiddleware);
  }

  const composeEnhancers = isServer
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // $FlowFixMe
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  // eslint-disable-next-line fp/no-let
  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer: any = rootReducer(history);
      store.replaceReducer(nextRootReducer);
    });

    module.hot.accept('./rootSaga', () => {
      const nextRootSaga: any = rootSaga;
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return { history, persistor, store };
};
