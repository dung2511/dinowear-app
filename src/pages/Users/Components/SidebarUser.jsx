import React from "react";
import { NavLink } from "react-router-dom";
import IconUser from "./IconUser";
import IconOrder from "./IconOrder";
import IconShipping from "./IconShipping";
import IconLogout from "./IconLogout";
const navItems = [
  {
    name: "Thông tin tài khoản",
    path: "/thong-tin-tai-khoan",
    icon: <IconUser />,
  },
  {
    name: "Quản lý đơn hàng",
    path: "/quan-ly-don-hang",
    icon: <IconOrder />,
  },
  {
    name: "Địa chỉ giao hàng",
    path: "/dia-chi-giao-hang",
    icon: <IconShipping />,
  },
];
const SidebarUser = () => {
  return (
    <>
      <aside className="lg:w-[17.5rem] sidebar-account bg-[#ffffff] rounded-[0.625rem] fixed lg:static">
        <div className="info-management xl:py-6 py-5 text-[#323232]">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li
                  className="flex border-b border-solid border-[#8B4513]  mb-6"
                  key={index}
                >
                  <NavLink
                    to={item.path}
                    className="flex items-center py-2 px-4 w-full"
                    title={item.name}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="flex border-b border-solid border-[#8B4513]  mb-6">
              <button className="flex items-center py-2 px-4 w-full">
                <span className="mr-4">
                  <IconLogout />
                </span>
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
      <span className="show-sidebar flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[#F44336] fixed top-[20%] right-0 z-10">
        <i className="fa-solid fa-gear"></i>
      </span>
    </>
  );
};

export default SidebarUser;
