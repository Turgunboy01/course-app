import React from "react";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <motion.div
      whileInView={{ translateX: ["-50px", 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className=" w-[70%]"
    >
      <div className=" flex justify-between flex-wrap sm:flex-nowrap gap-[30px]">
        <div className="w-full flex flex-col">
          <label className="text-[18px] font-medium mb-4 text-[#262626]">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className=" w-[100%] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0"
          />
          <label className="text-[18px] font-medium mb-4 text-[#262626]">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your Email"
            className=" w-[100%] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-[18px] font-medium mb-4 text-[#262626]">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className=" w-[100%] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0"
          />
          <label className="text-[18px] font-medium mb-4 text-[#262626]">
            Phone
          </label>
          <input
            type="number"
            placeholder="Enter Phone Number "
            className=" w-[100%] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label className="text-[18px] font-medium mb-4 text-[#262626]">
          Subject
        </label>
        <input
          type="text"
          placeholder="Enter your Subject"
          className=" w-[100%] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0"
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-[18px] font-medium mb-4 text-[#262626]">
          Message
        </label>
        <textarea
          //   className=" w-[100%] h-[10px] border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0 resize-none"
          className=" w-full h-[180px] px-[24px] py-5 border-[1px] border-[solid] mb-[30px] border-[#F1F1F3] rounded-lg outline-0 resize-none "
          placeholder="Enter your Message here..."
        ></textarea>
      </div>
    </motion.div>
  );
};

export default ContactLeft;
