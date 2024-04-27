import React from "react";
import LoginLeft from "../../components/login/LoginLeft";
import LoginRight from "../../components/login/LoginRight";

const LoginContainer = () => {
  return (
    <div className="container mx-auto px-5 pt-[100px] gap-[100px] flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-center">
      <LoginLeft />
      <LoginRight />
    </div>
  );
};

export default LoginContainer;
