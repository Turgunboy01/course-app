import React, { useState } from "react";
import CountUp from "react-countup";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ScrollTrigger from "react-scroll-trigger";

const PricingCart = ({
  plan,
  price,
  date,
  change1,
  change2,
  change3,
  change4,
  change5,
  change6,
  change7,
  check,
}) => {
  const [counOn, setCounOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounOn(true)}
      onExit={() => setCounOn(false)}
    >
      <div className=" px-[30px] py-[50px] bg-[#FCFCFD] max-w-[650px] w-[100%] border-[#F1F1F3] border-[1px] rounded-lg border-solid ">
        <button className=" py-3 bg-[#FFF9F0] w-full text-[22px] font-medium leading-[69px ] border-[#FFEACC] border-[1px] rounded-md">
          {plan} Plan
        </button>
        <div className="flex py-[30px] justify-center items-end">
          <h1 className="text-[60px] xl:text-[80px] font-semibold">
            $
            {counOn && (
              <CountUp start={0} end={price} duration={4} delay={0.1} />
            )}
          </h1>
          <p className="mb-[30px] text-[20px] font-medium text-[#4C4C4D]">
            {" "}
            {date}
          </p>
        </div>
        <div className=" p-[40px]  bg-[#ffffff] border-[#F1F1F3] border-[1px] rounded-t-[14px] border-solid">
          <h3 className=" pb-[10px] text-center text-[20px] text-[#262626] font-medium leading-[50px]">
            Available Features
          </h3>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            <p className="xl:text-[16px] text-[14px]">{change1} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            <p className="xl:text-[16px] text-[14px]">{change2} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            <p className="xl:text-[16px] text-[14px]">{change3} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            <p className="xl:text-[16px] text-[14px]">{change4} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            <p className="xl:text-[16px] text-[14px]">{change5} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            {check ? (
              <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            ) : (
              <IoClose className=" w-8 h-8  border-[1px]  border-solid  p-[6px] rounded-md" />
            )}
            <p>{change6} </p>
          </div>
          <div className="border-[#F1F1F3] my-5 border-[1px] rounded-[14px] border-solid p-[14px] flex gap-3 items-center">
            {check ? (
              <IoMdCheckmark className=" w-8 h-8  bg-[#FFF4E6] p-[6px] rounded-md" />
            ) : (
              <IoClose className=" w-8 h-8  border-[1px]  border-solid  p-[6px] rounded-md" />
            )}
            <p className="xl:text-[16px] text-[14px]">{change7} </p>
          </div>
        </div>
        <button className="w-full bg-[#FF9500] py-5  rounded-b-lg text-[18px] font-semibold text-[white] border-[#ff9500] border-solid border-[1px] transition-all hover:bg-white hover:text-[#ff9500]">
          Get Started
        </button>
      </div>
    </ScrollTrigger>
  );
};

export default PricingCart;
