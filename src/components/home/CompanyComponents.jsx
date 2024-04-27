import React from "react";
import company1 from "../../../public/header/adobe.png";
import company2 from "../../../public/header/amazon.png";
import company3 from "../../../public/header/notion.png";
import company4 from "../../../public/header/netflix.png";
import company5 from "../../../public/header/sptify.png";
import company6 from "../../../public/header/zapier.png";
import company7 from "../../../public/header/zoom.png";
const CompanyComponents = () => {
  return (
    <div className="container mx-auto bg-white border-solid border-[#F1F1F3] border-[1px] rounded-lg p-[30px] flex justify-center items-center sm:grid  flex-col gap-[20px] sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  ">
      <img src={company6} alt="" className=" px-[40px] py-[30px] " />
      <img src={company5} alt="" className=" px-[40px] py-[30px]  " />
      <img src={company7} alt="" className=" px-[40px] py-[30px]" />
      <img src={company2} alt="" className=" px-[40px] py-[30px] " />
      <img src={company1} alt="" className=" px-[40px] py-[30px] " />
      <img src={company3} alt="" className=" px-[40px] py-[30px] " />
      <img src={company4} alt="" className=" px-[40px] py-[30px] " />
    </div>
  );
};

export default CompanyComponents;
