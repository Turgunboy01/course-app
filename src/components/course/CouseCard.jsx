import React, { useState } from "react";
import { motion } from "framer-motion";

const CouseCard = ({
  img1,
  img2,
  img3,
  title,
  name,
  lavel,
  week,
  direction,
  direction2,
  direction3,
  direction4,
  direction5,
  desc,
}) => {
  return (
    <div className="bg-white p-[50px] mb-[50px] rounded-xl">
      <div className="flex justify-between items-center flex-wrap sm:flex-nowrap mb-[30px] ">
        <div className="mb-[30px]">
          <motion.h3
            whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="text-[24px] font-semibold leading-[150%]"
          >
            {title}
          </motion.h3>
          <motion.p
            whileInView={{ translateX: ["50px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mt-[10px] w-[95%]  text-[18px] text-[#59595A] leading-[]"
          >
            {desc}
          </motion.p>
        </div>
        <button className="px-[24px] py-[18px] border w-[200px] rounded-lg hover:bg-[#FF9500] hover:text-[#fff]">
          View Course
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-[15px]  xl:gap-[30px]">
        <motion.img
          whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src={img1}
          alt={title}
          className=" w-[346px] 2xl:w-[450px]   max-h-[326px]   2xl:max-h-[400px]   object-cover"
        />
        <motion.img
          whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src={img2}
          alt={title}
          className="max-w-[346px] 2xl:max-w-[450px]  w-[100%] max-h-[326px] 2xl:max-h-[400px] h-[100%] object-cover"
        />
        <motion.img
          whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src={img3}
          alt={title}
          className="max-w-[346px] 2xl:max-w-[450px]  w-[100%] max-h-[326px] 2xl:max-h-[400px] object-cover"
        />
      </div>
      <div className="flex justify-between items-center flex-wrap sm:flex-wrap mt-[30px]">
        <div className="flex gap-[10px]">
          <button className="px-[16px] py-[10px] border rounded-lg text-[18px] hover:border-[#FF9500] hover:text-[#FF9500] text-[#59595A]">
            {week} Weeks
          </button>
          <button className="px-[16px] py-[10px] border hover:border-[#FF9500] hover:text-[#FF9500] rounded-lg text-[18px] text-[#59595A]">
            {lavel}
          </button>
        </div>
        <motion.h3
          whileInView={{ translateY: ["50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[20px] text-[#262626] font-medium mt-[20px] sm:mt-[0px]"
        >
          {name}
        </motion.h3>
      </div>
      <div className=" border border-[#F1F1F3] rounded-[10px] mt-[50px]">
        <h3 className=" px-[30px] py-[24px] text-[22px] font-semibold">
          Curriculum
        </h3>
        <hr />
        <div className="py-[24px] px-[40px] xl:px-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid xl:grid-cols-5 justify-between  gap-[30px] ">
          <div className="">
            <h1 className="text-[40px] xl:text-[50px] font-extrabold text-[#262626] leading-[150%]">
              01
            </h1>
            <motion.h3
              whileInView={{ translateY: ["20px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" text-[#333333] font-medium text-[14px] xl:text-[18px] leading-[150%] w-[200px] "
            >
              {direction}
            </motion.h3>
          </div>
          <div className="">
            <h1 className="text-[40px] xl:text-[50px] font-extrabold text-[#262626] leading-[150%]">
              02
            </h1>
            <motion.h3
              whileInView={{ translateY: ["20px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" text-[#333333] font-medium text-[14px] xl:text-[18px] leading-[150%] w-[200px] "
            >
              {direction}
            </motion.h3>
          </div>

          <div className="">
            <h1 className="text-[40px] xl:text-[50px] font-extrabold text-[#262626] leading-[150%]">
              03
            </h1>
            <motion.h3
              whileInView={{ translateY: ["30px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" text-[#333333] font-medium text-[14px] xl:text-[18px] leading-[150%] w-[200px] "
            >
              {direction3}
            </motion.h3>
          </div>

          <div className="">
            <h1 className="text-[40px] xl:text-[50px] font-extrabold text-[#262626] leading-[150%]">
              04
            </h1>
            <motion.h3
              whileInView={{ translateY: ["40px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" text-[#333333] font-medium text-[14px] xl:text-[18px] leading-[150%] w-[200px] "
            >
              {direction4}
            </motion.h3>
          </div>

          <div className="">
            <h1 className="text-[40px] xl:text-[50px] font-extrabold text-[#262626] leading-[150%]">
              05
            </h1>
            <motion.h3
              whileInView={{ translateY: ["50px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" text-[#333333] font-medium text-[14px] xl:text-[18px] leading-[150%] w-[200px] "
            >
              {direction5}
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouseCard;
