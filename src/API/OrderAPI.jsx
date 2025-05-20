import axiosClient from "./axiosClient";

const OrderAPI = {
  post_detail_order: (data) => {
    const url = `/api/order`;
    return axiosClient.post(url, data);
  },

  get_detail_order: (id) => {
    const url = `/api/order/${id}`;
    return axiosClient.get(url);
  },
  getAllOrderByUser: (id_user) => {
    const url = `/api/order/user/${id_user}`;
    return axiosClient.get(url, id_user);
  },
  getOrderById: (id_order) => {
    const url = `/api/order/detail/${id_order}`;
    return axiosClient.get(url);
  },
};

export default OrderAPI;
