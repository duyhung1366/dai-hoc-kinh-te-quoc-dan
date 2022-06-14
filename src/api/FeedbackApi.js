import axiosClient from "./axiosClient";

const FeedbackApi = {
  getAll: (params) => {
    const url = "/feedback";
    return axiosClient.get(url, {
      params,
      baseURL: "http://localhost:3000",
    });
  },
  getId: (id) => {
    const url = `/feedback/${id}`;
    return axiosClient.get(url);
  },
};

export default FeedbackApi;
