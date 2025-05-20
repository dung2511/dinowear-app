import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import MenuHeader from "./MenuHeader";
import IconCart from "../../components/icons/IconCart";
import IconUser from "../../components/icons/IconUser";
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../Redux/Action/ActionSession";
import UserAPI from "../../API/UserAPI";
import Button from "../../components/UI/Button";
const Header = () => {
  const dispatch = useDispatch();
  if (JSON.parse(localStorage.getItem("id_user"))) {
    const action = addSession(JSON.parse(localStorage.getItem("id_user")));
    dispatch(action);
  }
  const id_user = useSelector((state) => state.Session.idUser);
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id_user) {
          const rs = await UserAPI.getDetailData(id_user);
          setUser(rs);
          setActiveUser(true);
        }
      } catch (error) {
        if (error.response?.data?.msg === "Không tìm thấy tài khoản") {
          setActiveUser(false);
        }
      }
    };
    fetchData().catch(() => {});
  }, [id_user]);
  // open Menu Mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="header sticky top-0 bg-white z-[100]">
      <div className="header-top text-xs lg:text-[0.875rem] text-center text-white bg-black py-2">
        Sign up and get 20% off to your first order.
        <Link to={"/dang-ky"} className="underline font-medium pl-1">
          Sign Up Now
        </Link>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="flex items-center justify-between py-4 lg:py-0">
            <Button onClick={toggleMenu} className="lg:hidden">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                    fill="black"
                  />
                </svg>
              </span>
            </Button>
            <Link to={"/"} title="" className="block h-logo ">
              <img src={Logo} alt="Logo" title="Logo" />
            </Link>
            <div className={`menu ${isOpen ? "active" : ""}`}>
              <div className="flex items-center justify-between lg:hidden  py-5  px-[0.9375rem]  border-b border-solid border-[#e7e7e7] ">
                <Link to={"/"} title="" className="flex items-center h-logo ">
                  <img src={Logo} alt="Logo" title="Logo" />
                </Link>
                <Button onClick={toggleMenu} className="lg:hidden">
                  <span>
                    <svg
                      viewBox="0 0 19 19"
                      role="presentation"
                      className="w-4 h-full cursor-pointer"
                    >
                      <path
                        d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Button>
              </div>
              <MenuHeader />
            </div>
            <div className="header-wrap-actions flex  items-center gap-2">
              <div className="header-action-item header-action_search search-desktop activeSearchChecked block">
                <Button className="header-action__link flex items-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.8438 19.3203C21.0781 19.5286 21.0781 19.75 20.8438 19.9844L19.9844 20.8438C19.75 21.0781 19.5286 21.0781 19.3203 20.8438L14.5938 16.1172C14.4896 16.013 14.4375 15.9089 14.4375 15.8047V15.2578C12.901 16.5859 11.1302 17.25 9.125 17.25C6.88542 17.25 4.97135 16.4557 3.38281 14.8672C1.79427 13.2786 1 11.3646 1 9.125C1 6.88542 1.79427 4.97135 3.38281 3.38281C4.97135 1.79427 6.88542 1 9.125 1C11.3646 1 13.2786 1.79427 14.8672 3.38281C16.4557 4.97135 17.25 6.88542 17.25 9.125C17.25 11.1302 16.5859 12.901 15.2578 14.4375H15.8047C15.9349 14.4375 16.0391 14.4896 16.1172 14.5938L20.8438 19.3203ZM4.71094 13.5391C5.9349 14.763 7.40625 15.375 9.125 15.375C10.8438 15.375 12.3151 14.763 13.5391 13.5391C14.763 12.3151 15.375 10.8438 15.375 9.125C15.375 7.40625 14.763 5.9349 13.5391 4.71094C12.3151 3.48698 10.8438 2.875 9.125 2.875C7.40625 2.875 5.9349 3.48698 4.71094 4.71094C3.48698 5.9349 2.875 7.40625 2.875 9.125C2.875 10.8438 3.48698 12.3151 4.71094 13.5391Z"></path>
                  </svg>
                </Button>
              </div>
              <Link className="inline-block" to={"/gio-hang"}>
                <IconCart />
              </Link>

              {activeUser && user ? (
                <Link
                  className="inline-flex items-center"
                  to={"/thong-tin-tai-khoan"}
                >
                  <span className="hidden lg:inline-block text-nowrap">
                    {user.fullname}
                  </span>
                  <span className="inline-block lg:hidden">
                    <IconUser />
                  </span>
                </Link>
              ) : (
                <Link className="inline-block" to={"/dang-nhap"}>
                  <IconUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
