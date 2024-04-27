import React from "react";
import TestimonialsCart from "./TestimonialsCart";
import img1 from "../../../public/home/user1.png";
import img2 from "../../../public/home/user2.png";
import img3 from "../../../public/home/user3.png";
import img4 from "../../../public/home/user4.png";
import { motion } from "framer-motion";

const TestimonialsContent = () => {
  return (
    <div
      className="container mx-auto px-5 mt-[108px] mb-[80px] "
      id="testimonials"
    >
      <div>
        <motion.h1
          whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-semibold"
        >
          Our Testimonials
        </motion.h1>
        <div className="flex justify-between items-center">
          <motion.p
            whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=" w-[77%] text-[18px]"
          >
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </motion.p>
          <button className="py-[18px] px-[24px] bg-white rounded-lg text-[18px] font-medium hover:bg-[#FF9500] hover:text-white">
            View All
          </button>
        </div>
      </div>
      <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <TestimonialsCart
          title={"Sarah L"}
          img={img1}
          desc={
            "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
          }
        />
        <TestimonialsCart
          title={"Jason M"}
          img={img2}
          desc={
            "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
          }
        />
        <TestimonialsCart
          title={"Emily R"}
          img={img3}
          desc={
            "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
          }
        />
        <TestimonialsCart
          title={"Michael K"}
          img={img4}
          desc={
            "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
          }
        />
      </div>
    </div>
  );
};

export default TestimonialsContent;
