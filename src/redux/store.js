import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './auth/authReducer';
import { modalsReducer } from './modal/modalReducer';
import { noticesReducer } from './notices/noticesSlice';
import { friendsReducer } from './friends/friendsSlice';
import { petsReducer } from './pets/petsSlice';
import { newsReducer } from './news/newsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    modal: modalsReducer,
    notices: noticesReducer,
    friends: friendsReducer,
    pets: petsReducer,
    news: newsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
