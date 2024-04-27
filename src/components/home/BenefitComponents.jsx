import React from "react";
import BenefitCart from "./BenefitCart";
import { motion } from "framer-motion";
const BenefitComponents = () => {
  return (
    <div id="benefit" className="container mx-auto px-5">
      <div>
        <motion.h1
          whileInView={{ translateX: ["-50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-semibold"
        >
          Benefits
        </motion.h1>
        <motion.p
          whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className=" w-[77%] text-[18px]"
        >
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </motion.p>
      </div>
      <div className="flex justify-center  lg:justify-between items-center flex-wrap gap-[20px] mt-[80px] mb-[100px]">
        <BenefitCart
          num={"01"}
          title={"Flexible Learning Schedule"}
          desc={
            "Fit your coursework around your existing commitments and obligations."
          }
        />
        <BenefitCart
          num={"02"}
          title={"Expert Instruction"}
          desc={
            "Learn from industry experts who have hands-on experience in design and development."
          }
        />{" "}
        <BenefitCart
          num={"03"}
          title={"Diverse Course Offerings"}
          desc={
            "Explore a wide range of design and development courses covering various topics."
          }
        />{" "}
        <BenefitCart
          num={"04"}
          title={"Updated Curriculum"}
          desc={
            "Access courses with up-to-date content reflecting the latest trends and industry practices."
          }
        />{" "}
        <BenefitCart
          num={"05"}
          title={"Practical Projects and Assignments"}
          desc={
            "Develop a portfolio showcasing your skills and abilities to potential employers."
          }
        />{" "}
        <BenefitCart
          num={"06"}
          title={"Interactive Learning Environment"}
          desc={
            "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
          }
        />
      </div>
    </div>
  );
};

export default BenefitComponents;
