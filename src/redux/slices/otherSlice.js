import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllHoliday } from '../services/otherServices';
 

 
export const GET_ALL_HOLIDAY = createAsyncThunk(
  'merchant/GET_ALL_HOLIDAY',
  async (data) => {
      try {
        const res = await AllHoliday();
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);

  
const otherSlice = createSlice({
  name: 'merchant',
  initialState: { holidayList: []},
  reducers: {},
  extraReducers:{

    [GET_ALL_HOLIDAY.fulfilled]: (state, action) => {
        state.holidayList = action.payload; 
    }, 

  },
});

export default otherSlice.reducer;
