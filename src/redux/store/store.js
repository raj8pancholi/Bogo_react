import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import subcategoryReducer from '../slices/subCategorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';
import businessInfoSlice from '../slices/businessInfoSlice';
import marchantVoucherSlice from '../slices/marchantVoucherSlice';

const reducer = {
  category: categoryReducer,
  subCategory: subcategoryReducer,
  merchantAuth:merchantAuthReducer,
  businessInfo:businessInfoSlice,
  marchantVoucher:marchantVoucherSlice
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;