import HttpClient from "./http-client";

export const CreateMerchant = data => {
    return HttpClient.post("/merchant/register", data);
};

export const LoginMerchant = data => {
    return HttpClient.post("/merchant/login", data);
  };


  export const BusinessMerchant = data => {
    return HttpClient.post("/merchant/business", data);
  };

export const RequestOtp = data => {
    return HttpClient.post("/merchant/requestOtp", data);
};

export const VerifyOtp = data => {
    return HttpClient.post("/merchant/verifyOtp", data);
};

export const ResetPassword = token  => {
    console.log('token is send by paramsssssssssssssssss:', token);
    return HttpClient.post(`/merchant/reset-password?token=${token}`);
};
