import React from "react";
import { motion } from "framer-motion";

const ServiceCart = ({ name, img, level, week, desc, title }) => {
  return (
    <div className="max-w-[730px] w-full p-[50px]  bg-white rounded-lg border-[1px] border-solid border-[#F1F1F3]">
      <motion.img
        whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        src={img}
        alt="img"
        className="w-[100%]"
      />
      <div className="py-[30px] flex justify-between items-center">
        <div className="flex gap-2 xl:gap-4">
          <button className="py-2 xl:py-[10px] px-[14px] xl:px-[16px] border-[1px] border-solid rounded-lg border-[#F1F1F3] text-[14px] xl:text-[18px] text-[#4C4C4D] font-normal">
            {" "}
            {week} Weeks
          </button>
          <button className=" py-[10px] px-[16px] border-[1px] border-solid rounded-lg border-[#F1F1F3] text-[14px] xl:text-[18px] text-[#4C4C4D] font-normal">
            {level}
          </button>
        </div>
        <h1 className="text-[14px] xl:text-[20px] font-medium leading-6">
          {" "}
          by {name}
        </h1>
      </div>
      <motion.h1
        whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="mb-[14px] text-[#262626] text-[20px] xl:text-[24px] font-medium"
      >
        {title}
      </motion.h1>
      <motion.p
        whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-[16px] xl:text-[18px] font-normal mb-[30px]"
      >
        {" "}
        {desc}
      </motion.p>
      <button className="w-[100%] border-[1px] border-solid rounded-lg border-[#F1F1F3] text-[18px] py-[18px] bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white transition-all">
        Get it Now{" "}
      </button>
    </div>
  );
};

export default ServiceCart;
