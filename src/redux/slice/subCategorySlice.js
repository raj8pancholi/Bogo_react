// subcategoriesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch subcategories from the API
export const fetchSubcategories = createAsyncThunk(
  'subcategories/fetchSubcategories',
  async (categoryId, { rejectWithValue, fulfillWithValue }) => {
    try {
      // Make your API call here to fetch subcategories based on categoryId
      // Replace the URL and payload as needed
      const response = await fetch(`/http://192.168.0.16:3000/v1/merchant/subcategory/get/?categoryId=7d75ff82-4057-4abc-bdfb-9dba3e39b039/subcategories?categoryId=${categoryId}`);
      if (response.ok) {
        const data = await response.json();
        return fulfillWithValue(data);
      } else {
        const data = await response.json();
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state for subcategories
const initialState = {
  subcategories: [],
  loading: false,
  error: null,
};

// Create the subcategories slice
const subcategoriesSlice = createSlice({
  name: 'subcategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
        state.error = null;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subcategoriesSlice.reducer;
