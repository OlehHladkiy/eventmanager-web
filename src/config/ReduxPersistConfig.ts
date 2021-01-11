import storage from 'redux-persist/lib/storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage,
    key: 'primary',
    whitelist: ['auth', 'user'],
  },
};

export default REDUX_PERSIST;
