// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slice/categorySlice';
// import categoryReducer from '../slice/';
import authReducer from '../slice/authSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer, // Add your category slice reducer
    // fetchSubcategories: fetchSubcategories,
    auth: authReducer,   // Add your auth slice reducer here
  },
  // other configuration options (middleware, etc.)
});

export default store;
