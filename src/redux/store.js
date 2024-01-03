import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import { registrationReducer } from './user/userSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, registrationReducer);
const reducer = {
  contacts: contactReducer,
  registration: persistedReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
