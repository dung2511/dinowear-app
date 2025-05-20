import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/api/users/${id}`;
    return axiosClient.get(url);
  },
  registerUser: (data) => {
    const url = `/api/users/create/`;
    return axiosClient.post(url, data);
  },
  login: (data) => {
    const url = "/api/users/login";
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = "/api/users/update";
    return axiosClient.patch(url, data);
  },
};

export default UserAPI;
