import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

export const UpdateBusinessInfo = createAsyncThunk( "businessInfo/get", (businessInfo) =>   businessInfo );

const businessInfoSlice = createSlice({
  name: 'businessInfo',
  initialState: { businessData: [] },
  reducers: {},
  extraReducers:{
 
    [UpdateBusinessInfo.fulfilled]: (state, action) => { 
        state.businessData = action.payload;
    },
 
  },
});

export default businessInfoSlice.reducer;
