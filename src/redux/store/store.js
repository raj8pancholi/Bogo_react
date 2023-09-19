// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slice/categorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer, // Add your category slice reducer
    // Add other reducers if needed
  },
  // other configuration options (middleware, etc.)
});

export default store;
