import React from "react";
import FooterTop from "../../components/footer/FooterTop";
import FooterButtom from "../../components/footer/FooterButtom";

const Footer = () => {
  return (
    <div className="bg-white mt-[140px] pt-[100px] pb-[30px]">
      <FooterTop />
      <FooterButtom />
    </div>
  );
};

export default Footer;
