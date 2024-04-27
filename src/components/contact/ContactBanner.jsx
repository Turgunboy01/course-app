import React from "react";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <div className=" container mx-auto px-5 border-b ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px] mt-[70px] md:mt-[110px] pb-[30px] md:pb-24">
        <motion.h1
          whileInView={{ translateX: ["-50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className=" flex-[.5] text-[30px] md:text-[48px] font-semibold leading-[150%] text-[#262626]"
        >
          Contact Us
        </motion.h1>
        <motion.p
          whileInView={{ translateX: ["50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-[.5] text-[#59595A] text-[13px] md:text-[18px] leading-[150%]"
        >
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </motion.p>
      </div>
    </div>
  );
};

export default ContactBanner;
