import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpRight = () => {
  const [eye, setEye] = useState(false);

  return (
    <motion.div
      whileInView={{ translateX: ["50px", 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className=" w-full p-[50px] bg-white mt-[80px] lg:mt-0"
    >
      <div className="text-center">
        <h2 className=" text-[48px] font-semibold text-[#262626] ">Sign Up</h2>
        <p className=" text-[#4C4C4D] text-[18px]">
          Create an account to unlock exclusive features.
        </p>
      </div>
      <div className="mt-[50px]">
        <label>Email</label>
        <input
          type="text"
          className="p-[24px] w-full outline-0 mt-[14px]  bg-[#FCFCFD] mb-6 border-[1px] border-[solid]  border-[#F1F1F3] rounded-[10px]"
          placeholder="Enter your Email"
        />
        <label className="">Password</label>
        <div className="w-full bg-[#FCFCFD] border-[1px] mt-[14px] border-[solid]  border-[#F1F1F3] rounded-[10px] p-6 flex items-center justify-between">
          <input
            type={`${eye ? "text" : "password"}`}
            placeholder="Enter your Password"
            className=" outline-0"
          />
          {eye ? (
            <FaEye onClick={() => setEye(false)} />
          ) : (
            <FaEyeSlash onClick={() => setEye(true)} />
          )}
        </div>
        <div className="flex justify-end mt-[14px] mb-6">
          <a className=" cursor-pointer">Forgot Password?</a>
        </div>
        <span className=" ">
          <input type="checkbox" /> I agree with Terms of Use and Privacy Policy
        </span>
        <button className="w-full mt-6 py-[18px] text-[18px] font-medium bg-[#FF9500] border-[1px] border-[solid] border-[#ff9500] text-white rounded-xl hover:bg-white hover:text-[#ff9500] transition-all">
          Sign Up
        </button>
        <p className="text-center p-2 text-gray-300">OR</p>
        <button className=" bg-[#F7F7F8]  w-full flex justify-center items-center gap-4 py-5 rounded-xl border-[1px] border-[solid] border-[#ff9500] hover:bg-[#ff9500] hover:text-white ">
          <FcGoogle className="text-[24px]" /> Sign Up with Google
        </button>
        <Link
          to={"/login"}
          className=" w-full flex items-center justify-center hover:text-[#ff9500] mt-[30px] cursor-pointer"
        >
          Already have an account? Login
          <RxArrowTopRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default SignUpRight;
