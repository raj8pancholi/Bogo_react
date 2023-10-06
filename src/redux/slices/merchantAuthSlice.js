import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BusinessMerchant, CreateMerchant, LoginMerchant}  from "../services/marchantAuthServices";

 

export const MERCHANT_SIGNUP = createAsyncThunk(
  "merchant/MERCHANT_SIGNUP",
  async (data) => {
    try {
      const res = await CreateMerchant(data);
     return res.data;
    } catch (error) { 
      if (error.response.status === 401) throw new Error(error.response.data.message)
      else  throw new Error("An unexpected error occurred"); 
    }
    
  
  }
);


export const MERCHANT_SIGNIN = createAsyncThunk(
  "merchant/MERCHANT_SIGNIN",
  async (data) => {
  try {
    const res = await LoginMerchant(data);
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);


export const MERCHANT_BUSINESS = createAsyncThunk(
  "merchant/MERCHANT_BUSINESS",
  async (data) => {
  try {
    const res = await BusinessMerchant(data);
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);


export const MERCHANT_BUSINESS_SUB = createAsyncThunk( "merchant/MERCHANT_BUSINESS_SUB", () => { return true } );


const marchantAuthSlice = createSlice({
  name: 'merchant',
  initialState: { merchantData: [], signUpError:'', loginError:'', businessApi:false },
  reducers: {},
  extraReducers:{

    [MERCHANT_SIGNUP.fulfilled]: (state, action) => {
        state.merchantData = action.payload;
        state.businessApi = true;
    },
    [MERCHANT_SIGNUP.rejected]: (state, action) => {
      state.signUpError = action.error.message;
    },


    [MERCHANT_SIGNIN.fulfilled]: (state, action) => {
      state.merchantData = action.payload;
      state.loginError = '';
    },
    [MERCHANT_SIGNIN.rejected]: (state, action) => { 
      state.loginError = action.error.message;
    },

    [MERCHANT_BUSINESS_SUB.fulfilled]: (state, action) => {
      state.businessApi = true;
    },
 
  },
});

export default marchantAuthSlice.reducer;
