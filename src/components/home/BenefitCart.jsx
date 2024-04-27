import React, { useState } from "react";
import CountUp from "react-countup";
import { RxArrowTopRight } from "react-icons/rx";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

const BenefitCart = ({ num, title, desc }) => {
  const [counOn, setCounOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounOn(true)}
      onExit={() => setCounOn(false)}
    >
      <div className="max-w-[480px] w-full rounded-lg bg-white p-[50px]">
        <h1 className=" text-right text-[60px] xl:text-[80px] font-extrabold mb-[50px]">
          {num}
        </h1>
        <motion.h3
          whileInView={{ scale: [0.6, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[20px] xl:text-[24px] font-semibold mb-3"
        >
          {title}
        </motion.h3>
        <motion.p
          whileInView={{ scale: [0.6, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[16px] xl:text-[18px] font-normal"
        >
          {desc}
        </motion.p>

        <button className="p-[20px] bg-[#FCFCFD] border-[#F1F1F3] border-[1px] rounded-lg mt-[50px] ml-[85%]">
          <RxArrowTopRight className="text-[#FF9500] text-[30px]" />
        </button>
      </div>
    </ScrollTrigger>
  );
};

export default BenefitCart;
