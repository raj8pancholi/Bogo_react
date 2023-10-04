import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import subcategoryReducer from '../slices/subCategorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';
import businessInfoSlice from '../slices/businessInfoSlice';

const reducer = {
  category: categoryReducer,
  subCategory: subcategoryReducer,
  merchantAuth:merchantAuthReducer,
  businessInfo:businessInfoSlice,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;