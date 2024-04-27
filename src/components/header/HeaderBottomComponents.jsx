import React, { useState } from "react";
import logo from "../../../public/header/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
const HeaderBottomComponents = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const navigatioonNan = () => {
    setMenu(false);
  };
  const [menu, setMenu] = useState(false);
  return (
    <div className="  border-b-[1px] mx-[30px]">
      <div className="container mx-auto flex relative  justify-between  py-5 ">
        <div className="flex items-center gap-[0px] lg:gap-[74px]">
          <a href="#">
            <img src={logo} alt="logo" className="logo w-[54px] h-[54px] " />
          </a>
          <div
            className={`  lg:flex ${
              menu
                ? " absolute top-[100px] flex flex-col bg-[#eee] w-full z-50"
                : "hidden"
            }`}
          >
            <Link
              to={"/"}
              onClick={() => navigatioonNan()}
              className={`hover:bg-[#F1F1F3] px-[24px] py-[14px]  cursor-pointer rounded-lg  ${
                location.pathname === "/" ? "bg-[#F1F1F3]" : ""
              }`}
            >
              Home
            </Link>
            <CgClose
              className=" absolute right-[20px] top-[20px] block lg:hidden"
              size={20}
              onClick={() => setMenu(false)}
            />
            <Link
              to={"/course"}
              onClick={() => navigatioonNan()}
              className={`hover:bg-[#F1F1F3] px-[24px] py-[14px] cursor-pointer rounded-lg  ${
                location.pathname === "/course" ? "bg-[#F1F1F3]" : ""
              }`}
            >
              Courses
            </Link>
            <Link
              to={"/about"}
              onClick={() => navigatioonNan()}
              className={`hover:bg-[#F1F1F3] px-[24px] py-[14px] cursor-pointer rounded-lg  ${
                location.pathname === "/about" ? "bg-[#F1F1F3]" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to={"/pricing"}
              onClick={() => navigatioonNan()}
              className={`hover:bg-[#F1F1F3] px-[24px] py-[14px] cursor-pointer rounded-lg  ${
                location.pathname === "/pricing" ? "bg-[#F1F1F3]" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              to={"/contact"}
              onClick={() => navigatioonNan()}
              className={`hover:bg-[#F1F1F3] px-[24px] py-[14px] cursor-pointer rounded-lg  ${
                location.pathname === "/contact" ? "bg-[#F1F1F3]" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Link
            to={"/signUp"}
            className={`hover:bg-[#F1F1F3] px-[15px] sm:px-[24px] py-[10px] sm:py-[14px] cursor-pointer rounded-lg  ${
              location.pathname === "/signUp" ? "bg-[#F1F1F3]" : ""
            }`}
          >
            Sign Up
          </Link>
          <Link
            to={"/login"}
            className={`hover:bg-[#fff] hover:text-[#ff9500] px-[34px] border border-[#ff9500] bg-[#FF9500] py-[14px]   cursor-pointer rounded-lg  ${
              location.pathname === "/login"
                ? "bg-[#fff] text-[#ff9500] "
                : "text-white"
            }`}
          >
            Login
          </Link>
          <button onClick={() => setMenu(!menu)} className=" block lg:hidden">
            <HiMenuAlt3 size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomComponents;
