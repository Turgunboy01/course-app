import React, { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const Accordion = ({ title, name }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div
      onClick={() => setAccordion(!accordion)}
      className={`flex flex-col gap-[50px] cursor-pointer border-[#F1F1F3]  border-[1px] rounded-[14px] border-solid p-[50px]   mb-[30px] ${
        accordion ? " transition-all h-auto" : " h-[120px]"
      }`}
    >
      <div className="flex gap-3 justify-between">
        <h3>{name}</h3>
        <div className="">
          {accordion ? (
            <button className="bg-[#FFF4E6] w-[52px] h-[52px] p-3 mt-[-10px] flex justify-center items-center">
              <FaPlus className=" rotate-45 transition-all duration-500 text-[20px]" />
            </button>
          ) : (
            <button className="bg-[#FFF4E6] w-[52px] h-[52px] p-3 flex mt-[-10px] justify-center items-center">
              <FaPlus className="transition-all duration-500  text-[20px]" />
            </button>
          )}
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordion
            ? " grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className=" overflow-hidden">{title}</p>
        <button className="flex overflow-hidden justify-between items-center py-[20px] px-[30px] mt-[50px] bg-[#F7F7F8]">
          <p>Enrollment Process for Different Courses</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Accordion;
