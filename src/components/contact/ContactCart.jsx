import React from "react";

const ContactCart = ({ title, icon }) => {
  return (
    <div className="p-[20px] w-full sm:p-[30px] bg-[#FCFCFD] flex justify-center items-center flex-col gap-5 border-[1px] border-[solid] border-[#F1F1F3] rounded-lg">
      <div className="w-[52px] h-[52px] border-[1px] border-[solid] border-[#F1F1F3] text-[25px] flex justify-center items-center rounded-lg">
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ContactCart;
