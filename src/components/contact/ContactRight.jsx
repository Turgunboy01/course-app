import React from "react";
import ContactCart from "./ContactCart";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactRight = () => {
  return (
    <motion.div
      whileInView={{ translateX: ["50px", 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className=" w-full lg:w-[30%]   flex flex-col gap-[50px] "
    >
      <ContactCart title={"support@skillbridge.com"} icon={<MdEmail />} />
      <ContactCart title={"+91 00000 00000"} icon={<IoCall />} />
      <ContactCart title={"Some Where in the World"} icon={<FaLocationDot />} />
    </motion.div>
  );
};

export default ContactRight;
