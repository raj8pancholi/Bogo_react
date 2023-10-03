import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateMerchant, LoginMerchant, VerifyOtp, RequestOtp, ResetPassword}  from "../services/marchantAuthServices";

 

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
    // const res = await RequestOtp(data);
    const res = await LoginMerchant(data);
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);




export const MERCHANT_REQUEST_OTP = createAsyncThunk(
  "merchant/MERCHANT_REQUEST_OTP",
  async (data) => {
  try {
    console.log(data + 'request otp data from slice');
    const res = await RequestOtp(data);
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);




export const MERCHANT_VERIFY_OTP = createAsyncThunk(
  "merchant/MERCHANT_VERIFY_OTP",
  async (data) => {
  try {
    const res = await VerifyOtp(data);
    console.log(res + 'verify otp data from slice');
    return res.data;
  } catch (error) {
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred");
  }
}
);

export const MERCHANT_RESET_PASSWORD = createAsyncThunk(
  'merchant/MERCHANT_RESET_PASSWORD',
  async (data) => {
      try {
        const res = await ResetPassword(data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);


const marchantAuthSlice = createSlice({
  name: 'merchant',
  initialState: { merchantData: [], signUpError:'', loginError:'' },
  reducers: {},
  extraReducers:{

    [MERCHANT_SIGNUP.fulfilled]: (state, action) => {
        state.merchantData = action.payload;
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


    [MERCHANT_VERIFY_OTP.fulfilled]: (state, action) => {
      state.merchantData = action.payload;
      state.otpError = '';
    },
    [MERCHANT_VERIFY_OTP.rejected]: (state, action) => { 
      state.otpError = action.error.message;
    }
 
  },
});

export default marchantAuthSlice.reducer;
