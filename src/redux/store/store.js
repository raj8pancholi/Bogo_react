import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import subcategoryReducer from '../slices/subCategorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';

const reducer = {
  category: categoryReducer,
  subCategory: subcategoryReducer,
  merchantAuth:merchantAuthReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;