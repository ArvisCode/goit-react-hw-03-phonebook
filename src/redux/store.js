import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsReduser';
import logger from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blackList: ['filter'],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
  middleware,
});

export const persistor = persistStore(store);
