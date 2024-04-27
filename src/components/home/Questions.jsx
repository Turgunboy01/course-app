import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
const Questions = () => {
  const accordionDAta = [
    {
      name: "Can I enroll in multiple courses at once?",
      title:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      name: "What kind of support can I expect from instructors?",
      title:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      name: "Are the courses self-paced or do they have specific start and end dates?",
      title:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      name: "Are there any prerequisites for the courses?",
      title:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      name: "Can I download the course materials for offline access?",
      title:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];

  return (
    <div className="my-[100px] " id="faq">
      <div className="container mx-auto flex justify-between gap-[40px] flex-wrap lg:flex-nowrap p-[100px] bg-white">
        <div className="">
          <motion.h1
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5 }}
            className="text-[48px] font-semibold leading-[120%] mb-[10px]"
          >
            Frequently Asked <br />
            Questions
          </motion.h1>
          <motion.p
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5 }}
            className=" text-[18px]  leading-[150%] mb-[50px]"
          >
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </motion.p>
          <motion.button
            whileInView={{ translateX: ["-30px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="py-[18px] px-[24px] border-[#F1F1F3]  border-[1px] rounded-[14px] border-solid"
          >
            See all FAQ's{" "}
          </motion.button>
        </div>
        <div className="">
          {accordionDAta.map((item) => (
            <motion.div
              whileInView={{ translateX: ["-30px", 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Accordion name={item.name} title={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
