import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store/configureStore';
import Button from './Button';

import 'antd/dist/antd.css';

const { history, persistor, store } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <React.StrictMode>
          <div>React: 17.0.1</div>
          <Button />
        </React.StrictMode>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
