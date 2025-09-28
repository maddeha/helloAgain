import AsyncStorage from '@react-native-async-storage/async-storage';

import { type PersistConfig, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { type UnknownAction, configureStore } from '@reduxjs/toolkit';

import { rewardsApi } from './api/rewardsApi';
import userSlice, { UserState } from './features/user/userSlice';

const userPersistConfig: PersistConfig<UserState> = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['rewards']
};

const persistedUserReducer = persistReducer<UserState, UnknownAction>(
  userPersistConfig,
  userSlice.reducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [rewardsApi.reducerPath]: rewardsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(rewardsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
