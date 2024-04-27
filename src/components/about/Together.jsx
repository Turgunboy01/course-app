import React from "react";
import shape from "../../../public/about/shape.png";
const Together = () => {
  return (
    <div className="container mx-auto mt-[80px] bg-white p-[80px] relative flex justify-between items-center flex-wrap md:flex-nowrap gap-[40px]">
      <img
        src={shape}
        alt="shape"
        className=" absolute bottom-[0] sm:top-[-50px] right-[10%] p-[40px]"
      />
      <h1 className="text-[48px] text-[#262626] font-semibold z-30 w-[85%]">
        <span className="text-[#FF9500]">Together</span>, let's shape the future
        of digital innovation
      </h1>
      <button className=" py-[18px] px-[24px] bg-[#FF9500] z-30 text-white rounded-lg">
        Join Now
      </button>
    </div>
  );
};

export default Together;
