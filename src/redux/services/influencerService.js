import HttpClient from "./http-client";

export const Influencers = () => {
    return HttpClient.get("/merchant/influencer/?role=INFLUENCER");
};

export const InviteInfluencers = (data) => {
    return HttpClient.post(`/merchant/invitation`,data);
};
 