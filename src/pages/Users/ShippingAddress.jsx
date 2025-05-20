import React, { useEffect, useState } from "react";
import SidebarUser from "./Components/SidebarUser";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LocationAPI from "../../API/LocationAPI";
import { addSession } from "../../Redux/Action/ActionSession";
import { useDispatch, useSelector } from "react-redux";
import UserAPI from "../../API/UserAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

const ShippingAddress = () => {
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState([]);
  const [district, setDistrict] = useState("");
  const [listDistrict, setListDistrict] = useState([]);
  const [award, setAward] = useState("");
  const [listAward, setListAward] = useState([]);
  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchDataCity = async () => {
      const response = await LocationAPI.getAllCity();
      setListCity(response);
    };
    fetchDataCity();
  }, []);
  useEffect(() => {
    const fetchDataDistrict = async () => {
      if (city) {
        const response = await LocationAPI.getDistricts(city);
        setListDistrict(response);
      }
    };
    fetchDataDistrict();
  }, [city]);
  useEffect(() => {
    const fetchDataAwards = async () => {
      if (city && district) {
        const response = await LocationAPI.getAwards(city, district);
        setListAward(response);
      }
    };
    fetchDataAwards();
  }, [district]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      id: id_user,
      city_id: city,
      district_id: district,
      award_id: award,
      address: address,
    };
    const response = await UserAPI.update(data);
    if (response.msg === "Bạn đã cập nhật thành công") {
      toast.success(response.msg, {
        position: "top-right",
      });
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (JSON.parse(localStorage.getItem("id_user"))) {
    const action = addSession(JSON.parse(localStorage.getItem("id_user")));
    dispatch(action);
  }
  const id_user = useSelector((state) => state.Session.idUser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id_user) {
          const rs = await UserAPI.getDetailData(id_user);
          setCity(rs.city_id);
          setAddress(rs.address);
          setTempDistrict(rs.district_id);
          setTempAward(rs.award_id);
        }
      } catch (error) {
        if (error.response?.data?.msg === "Không tìm thấy tài khoản") {
          navigate("/");
        }
      }
    };
    fetchData();
  }, [id_user]);
  const [tempDistrict, setTempDistrict] = useState(null);
  useEffect(() => {
    if (tempDistrict && listDistrict.length > 0) {
      setDistrict(tempDistrict);
      setTempDistrict(null);
    }
  }, [listDistrict]);

  const [tempAward, setTempAward] = useState(null);
  useEffect(() => {
    if (tempAward && listAward.length > 0) {
      setAward(tempAward);
      setTempAward(null);
    }
  }, [listAward]);
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex">
          <SidebarUser />
          <div className="w-full lg:flex-1 lg:pl-6">
            <div className="bg-white px-4 py-6 rounded-[0.625rem]">
              <form className="form " onSubmit={handleUpdate}>
                <p className="text-[1.25rem] text-center font-semibold mb-6">
                  Địa chỉ giao hàng
                </p>
                <div className="flex flex-wrap text-[var(--cl-text-main-2)] md:-mx-2">
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`city-select-label`}>
                          Tình / Thành phố
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`city-select-label`}
                          id="city-simple-select"
                          value={city}
                          name={"city"}
                          onChange={(e) => setCity(e.target.value)}
                          label={"Tỉnh / Thành phố"}
                        >
                          <MenuItem value="">Chọn Tỉnh / Thành phố</MenuItem>
                          {listCity &&
                            listCity.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item._id}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`district-select-label`}>
                          Quân / Huyện
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`district-select-label`}
                          id="district-simple-select"
                          value={district}
                          name={"district"}
                          onChange={(e) => setDistrict(e.target.value)}
                          label={"Quân / Huyện"}
                        >
                          <MenuItem value="">Chọn Quân / Huyện</MenuItem>

                          {listDistrict &&
                            listDistrict.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item.code}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`award-select-label`}>
                          Phường / Xã
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`award-select-label`}
                          id="award-simple-select"
                          value={award || ""}
                          name={"award"}
                          onChange={(e) => setAward(e.target.value)}
                          label={"Phường / Xã"}
                        >
                          <MenuItem value="">Chọn Phường / Xã</MenuItem>
                          {listAward &&
                            listAward.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item.code}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      name={"address"}
                      label={"Ghi chú (số nhà , địa chỉ chi tiết)"}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center mt-4 font-medium">
                  <Button className="btn-17">
                    <span className="text-container">
                      <span className="text">Lưu thay đổi</span>
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
