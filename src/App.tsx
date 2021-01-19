import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled, { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

import OnLocationChange from '@components/onLocationChange';
import Preloader from '@components/Preloader';
import Header from '@components/Header';

import configureStore from './store/configureStore';
import routes from './routes';
import { getTheme } from './theme/index';

const { theme, GlobalStyle } = getTheme('base');
const { history, persistor, store } = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <GlobalStyle />
          <OnLocationChange />
          <Suspense fallback={<Preloader />}>
            <Header />
            <App.Layout>{routes}</App.Layout>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

App.Layout = styled.div`
  min-height: 100vh;
`;

export default App;
