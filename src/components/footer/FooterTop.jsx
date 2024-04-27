import React from "react";

import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
const FooterTop = () => {
  return (
    <div className="container mx-auto px-5 flex justify-between pb-[50px] gap-10 flex-wrap lg:flex-nowrap border-b">
      <div className="">
        <FooterLeft />
      </div>
      <div className="">
        <FooterRight />
      </div>
    </div>
  );
};

export default FooterTop;
