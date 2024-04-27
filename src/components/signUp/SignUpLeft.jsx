import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const SignUpLeft = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      title: "Sarah L",
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      title: "L Sarah",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      desc: "The web design course provided aLorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam  Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      title: "mr Sarah",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <motion.div
      whileInView={{ translateX: ["-50px", 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-20"
    >
      <div className="">
        <h1 className="text-[38px] font-medium mb-2">Students Testimonials</h1>
        <p className="text-[18px] text-[#59595A]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className=" w-full m-auto py-16 px-4 relative group bg-[#FCFCFD] rounded-lg border ">
        <motion.div
          whileInView={{ translateX: ["-30px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-[50px]"
        >
          <p className="text-[#4C4C4D] text-[18px]">
            {slides[currentIndex].desc}
          </p>
        </motion.div>
        <div className="py-[30px] px-[50px] flex items-center justify-between">
          <div className=" flex items-center gap-3">
            <img
              src={slides[currentIndex].url}
              className="w-[60px] h-[60px] rounded-lg object-cover  duration-500"
              alt=""
            />

            <div className="text-[18px] font-semibold text-[#333333]">
              {slides[currentIndex].title}
            </div>
          </div>
          <button
            className=" py-[18px] px-[24px] bg-[#F7F7F8] border-[1px] border-[solid] border-[#F1F1F3] rounded-lg hover:bg-[#FF9500] hover:text-[#fff]
        font-medium text-[#262626]
        "
          >
            Read More
          </button>
        </div>

        <div
          className="absolute right-[50%] lg:right-[90px] bottom-[-100px]   p-[14px] bg-[#fff]  rounded-lg border text-black cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowLeft size={30} />
        </div>

        <div
          className=" absolute bottom-[-100px] right-[38%] lg:right-0  p-[14px] bg-[#FFFFFF] rounded-lg border text-black cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpLeft;
