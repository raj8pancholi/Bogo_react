import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';

const reducer = {
  category: categoryReducer,
  merchantAuth:merchantAuthReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;