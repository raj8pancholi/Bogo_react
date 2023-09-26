import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSubcategory  = createAsyncThunk('subcategories/fetchSubcategory', async (categoryId, { rejectWithValue, fulfillWithValue })=> {

    try {
    
      const response = await fetch(`http://3.108.250.128:3000/v1/merchant/subcategory/?categoryId=${categoryId}`);

        if(response.ok) {
            const data = await response.json();
            return fulfillWithValue(data);
        }else{
            const data = await response.json();
        return rejectWithValue(data);
        }
        


    } catch (error) {
        return rejectWithValue(error.message);
    }
});



const subCategorySlice = createSlice({
  name: 'subcategories',
  initialState: {
    subcategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


  
export default subCategorySlice.reducer;