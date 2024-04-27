import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="flex gap-[130px] flex-wrap md:flex-nowrap">
      <div className="flex flex-col">
        <Link
          to={"/"}
          className="mb-[14px] text-[#262626] font-semibold text-[20px]"
        >
          Home
        </Link>

        <a
          href="#benefit"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Benefits
        </a>
        <a
          href="#ourCourse"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Our Courses
        </a>
        <a
          href="#testimonials"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Our Testimonials
        </a>
        <a
          href="#faq"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Our FAQ
        </a>
      </div>
      <div className="flex flex-col">
        <Link
          to={"/about"}
          className="mb-[14px] text-[#262626] font-semibold text-[20px]"
        >
          About Us
        </Link>
        <a
          href="#aboutBanner"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Company
        </a>
        <a
          href="#archimed"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
        >
          Achievements
        </a>
        <a
          href="#goals"
          className=" text-[18px] text-[#59595A] font-normal mb-2 "
          i
        >
          Our Goals
        </a>
      </div>
      <div className="">
        <h3 className="mb-[14px] text-[#262626] font-semibold text-[20px]">
          Social Profiles
        </h3>
        <ul className="flex gap-[14px]">
          <li>
            <a
              href="#"
              className="w-[52px] h-[52px] bg-[#F7F7F8] border-[#F1F1F3]  hover:text-[#FF9500] hover:border-[#FF9500] transition-all border-[1px] rounded-[14px] border-solid flex justify-center items-center"
            >
              <FaFacebook className=" text-[24px]" />{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-[52px] h-[52px] bg-[#F7F7F8] border-[#F1F1F3] hover:text-[#FF9500] hover:border-[#FF9500] transition-all  border-[1px] rounded-[14px] border-solid flex justify-center items-center"
            >
              <FaTwitter className=" text-[24px]" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-[52px] h-[52px] bg-[#F7F7F8] border-[#F1F1F3] hover:text-[#FF9500] hover:border-[#FF9500] transition-all  border-[1px] rounded-[14px] border-solid flex justify-center items-center"
            >
              <FaLinkedin className=" text-[24px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterRight;
