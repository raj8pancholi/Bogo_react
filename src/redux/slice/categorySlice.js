// src/slices/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch categories from the API
export const fetchCategories = createAsyncThunk('category/fetchCategories', async (_, {rejectWithValue, fulfillWithValue}) => {
  // Your API call logic here
  try {
    const response = await fetch('192.168.0.16:3000/v1/admin/category/add');
    const data = await response.json();
    return fulfillWithValue(data);
  } catch (err) {
    return rejectWithValue(err.message);
  } 
});







const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
