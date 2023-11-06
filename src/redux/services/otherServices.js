import HttpClient from "./http-client";

export const AllHoliday = () => { return HttpClient.get("/merchant/all-holiday"); };

export const UserProfile = () => { 
    const token = localStorage.getItem('token');
    console.log("token", token);
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    return HttpClient.get("/users/profile", { headers }); 
};

export const ChangePassword = (oldPassword, newPassword) => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    
    const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
    };

    return HttpClient.post('/auth/reset-password', data, { headers });
};

