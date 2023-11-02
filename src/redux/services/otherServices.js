import HttpClient from "./http-client";

export const AllHoliday = () => { return HttpClient.get("/merchant/all-holiday"); };
console.log('AllHoliday', AllHoliday);

