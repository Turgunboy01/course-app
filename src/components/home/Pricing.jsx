import React, { useState } from "react";
import PricingCart from "./PricingCart";
import { motion } from "framer-motion";

const Pricing = ({ value }) => {
  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);
  const [left, setLeft] = useState("20px");
  const [text, setText] = useState("Monthly");
  const clickMonth = () => {
    setLeft("10px");
    setText("Monthly");
    setYear(false);
    setMonth(true);
  };
  const clickYear = () => {
    setLeft("120px");
    setText("Yearly");
    setYear(true);
    setMonth(false);
  };
  return (
    <div className="container mx-auto px-5">
      {value ? (
        <motion.div
          whileInView={{ translateY: ["50px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <div className=" p-3 relative">
            <button
              onClick={clickMonth}
              className="py-[18px] px-[24px]  text-[18px] font-medium  "
            >
              Monthly
            </button>
            <button
              onClick={clickYear}
              className="py-[18px] px-[24px] bg-white rounded-lg text-[18px] font-medium  "
            >
              Yearly
            </button>
            <span
              style={{ left }}
              className=" w-[115px] py-[18px] px-[24px] text-[18px] font-medium text-center rounded-lg [transition:left_cubic-bezier(0.88,_-0.35,_0.565,_1.35)_0.4s]  bg-[#FF9500] text-white   absolute "
            >
              {text}
            </span>
          </div>
        </motion.div>
      ) : (
        <div className="">
          <motion.h1
            whileInView={{ opacity: [0, 1], translateX: ["-30px", 0] }}
            transition={{ duration: 0.7 }}
            className="text-[48px] font-semibold"
          >
            Our Pricing
          </motion.h1>
          <div className="flex justify-between items-center flex-wrap gap-[30px]">
            <motion.p
              whileInView={{ opacity: [0, 1], translateX: ["30px", 0] }}
              transition={{ duration: 0.7 }}
              className=" w-[67%] text-[18px]"
            >
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </motion.p>
            <div className="bg-white rounded-lg p-3 relative">
              <button
                onClick={clickMonth}
                className="py-[18px] px-[24px]  text-[18px] font-medium  "
              >
                Monthly
              </button>
              <button
                onClick={clickYear}
                className="py-[18px] px-[24px] bg-white rounded-lg text-[18px] font-medium  "
              >
                Yearly
              </button>
              <span
                style={{ left }}
                className=" w-[115px] py-[18px] px-[24px] text-[18px] font-medium text-center rounded-lg [transition:left_cubic-bezier(0.88,_-0.35,_0.565,_1.35)_0.4s]  bg-[#FF9500] text-white   absolute "
              >
                {text}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="p-[60px] flex justify-center flex-wrap lg:flex-nowrap  gap-[30px] bg-white mt-[20px] md:mt-[80px]">
        {month && (
          <>
            <motion.div
              whileInView={{ translateX: ["-100px", 0] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <PricingCart
                plan={"Free"}
                change1={"Access to selected free courses."}
                change2={"Limited course materials and resources."}
                change3={"Basic community support."}
                change4={"No certification upon completion."}
                change5={"Ad-supported platform."}
                change6={"Access to exclusive Pro Plan community forums."}
                change7={"Early access to new courses and updates."}
                price={"0"}
                date={"/month"}
                check={false}
              />
            </motion.div>
            <motion.div
              whileInView={{ translateX: ["100px", 0] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <PricingCart
                plan={"Pro"}
                change1={"Unlimited access to all courses."}
                change2={"Unlimited course materials and resources."}
                change3={"Priority support from instructors."}
                change4={"Course completion certificates."}
                change5={"Ad-free experience."}
                change6={"Access to exclusive Pro Plan community forums."}
                change7={"Early access to new courses and updates."}
                price={"79"}
                date={"/month"}
                check={true}
              />
            </motion.div>
          </>
        )}
        {year && (
          <>
            <motion.div
              whileInView={{ translateX: ["-100px", 0] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <PricingCart
                plan={"Free"}
                change1={"Access to selected free courses."}
                change2={"Limited course materials and resources."}
                change3={"Basic community support."}
                change4={"No certification upon completion."}
                change5={"Ad-supported platform."}
                change6={"Access to exclusive Pro Plan community forums."}
                change7={"Early access to new courses and updates."}
                price={"0"}
                date={"/year"}
                check={false}
              />{" "}
            </motion.div>
            <motion.div
              whileInView={{ translateX: ["100px", 0] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <PricingCart
                plan={"Pro"}
                change1={"Unlimited access to all courses."}
                change2={"Unlimited course materials and resources."}
                change3={"Priority support from instructors."}
                change4={"Course completion certificates."}
                change5={"Ad-free experience."}
                change6={"Access to exclusive Pro Plan community forums."}
                change7={"Early access to new courses and updates."}
                price={"800"}
                date={"/year"}
                check={true}
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pricing;
