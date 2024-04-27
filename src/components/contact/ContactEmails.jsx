import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { motion } from "framer-motion";

const ContactEmails = () => {
  return (
    <div className="container mx-auto p-30px px-5  md:p-[80px] bg-white mt-[100px] flex justify-center lg:justify-between flex-wrap lg:flex-nowrap rounded-lg items-start gap-[50px] lg:gap-[160px]">
      <ContactLeft />

      <ContactRight />
    </div>
  );
};

export default ContactEmails;
