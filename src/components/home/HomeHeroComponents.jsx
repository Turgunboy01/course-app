import React from "react";
import heroImg1 from "../../../public/header/Icon Container.png";
import heroImg2 from "../../../public/header/heroImg.png";
import { motion } from "framer-motion";
const HomeHeroComponents = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center items-center ">
      <div className="my-[100px] text-center flex justify-center items-center flex-col ">
        <motion.h1
          whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[20px] sm:text-[30px] lg:text-[48px] max-w-[450px] w-[100%]  sm:max-w-[860px]   font-semibold leading-5 flex justify-center items-center gap-[10px] py-[14px] px-1 bg-white rounded-lg border-solid border-2 border-[#F1F1F3] relative "
        >
          <img
            src={heroImg2}
            className=" absolute top-[-30px] left-[-30px] "
            alt=""
          />
          <img src={heroImg1} alt="" />
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </motion.h1>
        <motion.h1
          whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className=" text-[24px] md:text-[38px]  mt-5 mb-3 font-medium "
        >
          with Online Design and Development Courses.
        </motion.h1>
        <p className=" text-[18px] font-normal leading-6">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <motion.div
          whileInView={{ translateY: ["50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 justify-center mt-[60px]"
        >
          <button className="py-[18px] px-[24px] bg-white hover:bg-[#FF9500] hover:text-white rounded-lg">
            Explore Courses
          </button>
          <button className="py-[18px] px-[24px] bg-white hover:bg-[#FF9500] hover:text-white rounded-lg">
            View Pricing
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHeroComponents;
