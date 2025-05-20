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
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../Redux/Action/ActionSession";
import UserAPI from "../../API/UserAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileUser = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      id: id_user,
      fullname: fullname,
      email: email,
      phone: phone,
      gender: gender,
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
          setFullname(rs.fullname);
          setEmail(rs.email);
          setPhone(rs.phone);
          setGender(rs.gender);
        }
      } catch (error) {
        if (error.response?.data?.msg === "Không tìm thấy tài khoản") {
          navigate("/");
        }
      }
    };
    fetchData();
  }, [id_user]);
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex">
          <SidebarUser />
          <div className="w-full lg:flex-1 lg:pl-6">
            <div className="bg-white px-4 py-6 rounded-[0.625rem]">
              <form className="form ">
                <p className="text-[1.25rem] text-center font-semibold mb-6">
                  Thông tin tài khoản
                </p>
                <p className="pb-2 border-b border-solid font-semibold border-[#D6D6D6] mb-4">
                  Thông tin chung
                </p>
                <div className="flex flex-wrap text-[var(--cl-text-main-2)] md:-mx-2">
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        type={"text"}
                        fullWidth
                        id={`outlined-fullName`}
                        label={"Họ và tên"}
                        name={"fullName"}
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        variant="outlined"
                      />
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        type={"email"}
                        fullWidth
                        id={`outlined-Email`}
                        label={"Email"}
                        name={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                      />
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        type={"text"}
                        fullWidth
                        id={`outlined-Phone`}
                        label={"Số điện thoại"}
                        name={"phone"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="outlined"
                      />
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`gender-select-label`}>
                          Giới tính
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`gender-select-label`}
                          id="gender-simple-select"
                          value={gender || ""}
                          name={"gender"}
                          onChange={(e) => setGender(e.target.value)}
                          label={"Giới tính"}
                        >
                          <MenuItem value={"Nam"}>Nam</MenuItem>
                          <MenuItem value={"Nữ"}>Nữ</MenuItem>
                          <MenuItem value={"Khác"}>Khác</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className="flex w-full justify-center mt-4 font-medium">
                  <button className="btn-17" onClick={handleUpdate}>
                    <span className="text-container">
                      <span className="text">Lưu thay đổi</span>
                    </span>
                  </button>
                </div>
              </form>
              <form action="">
                <p className="pb-2 border-b border-solid font-semibold border-[#D6D6D6] mb-4">
                  Mật khẩu
                </p>
                <div className="flex flex-wrap text-[var(--cl-text-main-2)] md:-mx-2">
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <div className="w-full mb-4">
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"password"}
                          fullWidth
                          id={`outlined-password`}
                          label={"Mật khẩu hiện tại"}
                          name={"password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                        />
                      </Box>
                    </div>
                    <div className="w-full mb-4">
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"password"}
                          fullWidth
                          id={`outlined-newPassword`}
                          label={"Mật khẩu mới"}
                          name={"newPassword"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          variant="outlined"
                        />
                      </Box>
                    </div>
                    <div className="w-full mb-4">
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"password"}
                          fullWidth
                          id={`outlined-confirmNewPassword`}
                          label={"Nhập mật khẩu mới"}
                          name={"confirmNewPassword"}
                          value={confirmNewPassword}
                          onChange={(e) =>
                            setConfirmNewPassword(e.target.value)
                          }
                          variant="outlined"
                        />
                      </Box>
                    </div>
                    <div className="flex w-full font-medium">
                      <button className="btn-17">
                        <span className="text-container">
                          <span className="text">Đổi mật khẩu</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <p className="text-[#323232] font-medium">
                      Mật khẩu yêu cầu
                    </p>
                    <ul className="list-require-password text-[#323232] font-medium">
                      <li>Ít nhất 8 ký tự</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
