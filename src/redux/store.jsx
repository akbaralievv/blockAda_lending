import { configureStore } from '@reduxjs/toolkit';
import isModalSlice from './slices/isModalSlice';

export const store = configureStore({
  reducer: {
    isModalSlice,
  },
});
