import React from "react";
import AboutBanner from "../../components/about/AboutBanner";
import Achievements from "../../components/about/Achievements";
import Goals from "../../components/about/Goals";
import Together from "../../components/about/Together";
import { motion } from "framer-motion";

const AboutContainer = () => {
  return (
    <div className=" overflow-hidden">
      <AboutBanner />
      <motion.div
        whileInView={{ translateX: ["100px", 0] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Achievements />
      </motion.div>
      <motion.div
        whileInView={{ translateX: ["-100px", 0] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Goals />
      </motion.div>
      <motion.div
        whileInView={{ translateX: ["100px", 0] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Together />
      </motion.div>
    </div>
  );
};

export default AboutContainer;
