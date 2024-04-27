import React from "react";
import { motion } from "framer-motion";

const TestimonialsCart = ({ img, title, desc }) => {
  return (
    <div className="max-w-[750px] w-full border-[#F1F1F3] border-[1px] rounded-lg border-solid bg-white">
      <motion.p
        whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="p-[50px] text-[16px] xl:text-[18px]"
      >
        {desc}
      </motion.p>
      <hr />
      <div className="py-[30px] px-[50px] flex justify-between items-center">
        <div className="flex items-center gap-[15px]">
          <motion.img
            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            src={img}
            alt="user"
          />
          <p className="text-[16px] xl:text-[18px]"> {title}</p>
        </div>
        <button className=" border-[1px] border-solid rounded-lg border-[#F1F1F3] text-[18px] py-[18px] px-[24px] bg-[#F7F7F8] hover:bg-[#FF9500] hover:text-white transition-all">
          Read Full Story
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCart;
