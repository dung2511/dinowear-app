import axiosClient from "./axiosClient";

const LocationAPI = {
  getAllCity: () => {
    const url = "/api/location/cities";
    return axiosClient.get(url);
  },
  getDistricts: (code) => {
    const url = `/api/location/cities/${code}/districts`;
    return axiosClient.get(url);
  },
  getAwards: (codeCity, codeDistrict) => {
    const url = `/api/location/cities/${codeCity}/districts/${codeDistrict}/awards`;
    return axiosClient.get(url);
  },
};

export default LocationAPI;
