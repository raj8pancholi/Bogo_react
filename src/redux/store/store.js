// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slice/categorySlice';
import subcategoryReducer from '../slice/subCategorySlice';
import authReducer from '../slice/authSlice';

const store = configureStore({
  
  reducer: {
    category: categoryReducer, // Add your category slice reducer
    subCategory: subcategoryReducer,
    auth: authReducer,   // Add your auth slice reducer here
  },
  // other configuration options (middleware, etc.)
});


export default store;
