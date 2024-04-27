import React from "react";
import { motion } from "framer-motion";

const CouseBanner = () => {
  return (
    <div className=" border-b mx-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px] mt-[70px] md:mt-[110px] pb-[30px] md:pb-24">
          <motion.h1
            whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=" flex-[.5] text-[30px] md:text-[48px] font-semibold leading-[150%] text-[#262626] "
          >
            Online Courses on Design and Development
          </motion.h1>
          <motion.p
            whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex-[.5] text-[#59595A] text-[13px] md:text-[18px] leading-[150%]"
          >
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CouseBanner;
