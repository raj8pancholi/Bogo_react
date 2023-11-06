import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AllHoliday, UserProfile, ChangePassword } from '../services/otherServices';
import { toast } from 'react-toastify';
 

 
export const GET_ALL_HOLIDAY = createAsyncThunk(
  'merchant/GET_ALL_HOLIDAY',
  async (data) => {
      console.log( 'GET_ALL_HOLIDAY', data);
      try {
        const res = await AllHoliday();
        console.log('user GET_ALL_HOLIDAY data from slice', res.data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);


export const GET_USER_PROFILE = createAsyncThunk(
  'merchant/GET_USER_PROFILE',
  async (data) => {
    
      try {
        const res = await UserProfile();
        
        console.log( 'GET_USER_PROFILE', res);
        console.log('user profile data from slice', res.data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);



export const CHANGE_PASSWORD = createAsyncThunk(
  'merchant/CHANGE_PASSWORD',
  async (passwordData, { rejectWithValue }) => {
    try {
      const { oldPassword, newPassword } = passwordData;
      console.log('passwordDataaaaaa', passwordData);
      const res = await ChangePassword(oldPassword, newPassword);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

  
const otherSlice = createSlice({
  name: 'merchant',
  initialState: { holidayList: [], userProfileData: {}, changePasswordData: {}},
  reducers: {},
  extraReducers:{

    [GET_ALL_HOLIDAY.fulfilled]: (state, action) => {
        state.holidayList = action.payload; 

    }, 
    [GET_USER_PROFILE.fulfilled]: (state, action) => {
        state.userProfileData = action.payload; 
    },
    [CHANGE_PASSWORD.fulfilled]: (state, action) => {
        state.changePasswordData = action.payload; 
    },


  },
});

export default otherSlice.reducer;
