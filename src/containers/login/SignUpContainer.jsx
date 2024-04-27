import React from "react";
import SignUpLeft from "../../components/signUp/SignUpLeft";
import SignUpRight from "../../components/signUp/SignUpRight";

const SignUpContainer = () => {
  return (
    <div className="container mx-auto px-5 pt-[100px] gap-[100px] flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-center">
      <SignUpLeft />
      <SignUpRight />
    </div>
  );
};

export default SignUpContainer;
