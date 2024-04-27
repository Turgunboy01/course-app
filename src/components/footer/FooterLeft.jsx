import React from "react";
import logo from "../../../public/header/Logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterLeft = () => {
  return (
    <div className=" flex flex-col gap-[20px]">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className=" flex gap-2 items-center mt-5">
        {" "}
        <MdEmail />{" "}
        <p className=" text-[18px]  text-[#262626] font-medium">
          hello@skillbridge.com
        </p>
      </div>
      <div className=" flex gap-2 items-center">
        <FaPhoneAlt />
        <p className=" text-[18px]  text-[#262626] font-medium">
          +91 91813 23 2309
        </p>
      </div>
      <div className=" flex gap-2 items-center">
        <FaLocationDot />
        <p className=" text-[18px]  text-[#262626] font-medium">
          Somewhere in the World
        </p>
      </div>
    </div>
  );
};

export default FooterLeft;
