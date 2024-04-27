import React from "react";
const ArchieventCard = ({ title, img, desc }) => {
  return (
    <div className="p-[50px] bg-white rounded-xl max-w-[783px] w-[100%] ">
      <img
        src={img}
        alt={title}
        className="mb-[30px] w-[66px] h-[66px] object-contain p-4 bg-[#FFF9F0] border-[1px] border-[solid] border-[#FFEACC] rounded-lg"
      />
      <h1 className="mb-[14px] text-[24px] font-medium text-[#262626]">
        {title}
      </h1>
      <p className="text-[18px] text-[#59595A]">{desc}</p>
    </div>
  );
};

export default ArchieventCard;
