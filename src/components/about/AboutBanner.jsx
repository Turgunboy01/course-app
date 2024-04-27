import React from "react";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <div className=" border-b mx-[30px]"id="aboutBanner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px] mt-[70px] md:mt-[110px] pb-[30px] md:pb-24">
          <motion.h1
            whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=" flex-[.5] text-[30px] md:text-[48px] font-semibold leading-[150%] text-[#262626]"
          >
            {" "}
            About Skillbridge
          </motion.h1>
          <motion.p
            whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex-[.5] text-[#59595A] text-[13px] md:text-[18px] leading-[150%]"
          >
            Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
