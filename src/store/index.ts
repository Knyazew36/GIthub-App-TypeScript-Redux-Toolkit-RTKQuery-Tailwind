import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import {
  curryGetDefaultMiddleware,
  getDefaultMiddleware,
} from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
