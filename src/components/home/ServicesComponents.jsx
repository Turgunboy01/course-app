import React from "react";
import ServiceCart from "./ServiceCart";
import services1 from "../../../public/home/servicers1.png";
import services2 from "../../../public/home/servicers2.png";
import services3 from "../../../public/home/servicers3.png";
import services4 from "../../../public/home/servicers4.png";
import services5 from "../../../public/home/servicers5.png";
import services6 from "../../../public/home/servicers6.png";
import { motion } from "framer-motion";
const ServicesComponents = () => {
  return (
    <div className="container mx-auto px-5" id="ourCourse">
      <div>
        <motion.h1
          whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-semibold"
        >
          Our Courses
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
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[80px]  gap-[20px]">
        <ServiceCart
          name={"John Smith"}
          img={services1}
          week={"4"}
          title={"Web Design Fundamentals"}
          level={"Beginner"}
          desc={
            "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
          }
        />{" "}
        <ServiceCart
          name={"Emily Johnson"}
          img={services2}
          week={"6"}
          title={"UI/UX Design"}
          level={"Intermediate"}
          desc={
            "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
          }
        />{" "}
        <ServiceCart
          name={"David Brown"}
          img={services3}
          week={"8"}
          title={"Mobile App Development"}
          level={"Intermediate"}
          desc={
            "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
          }
        />{" "}
        <ServiceCart
          name={"Sarah Thompson"}
          img={services4}
          week={"10"}
          title={"Mobile App Development"}
          level={"Beginner"}
          desc={
            "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
          }
        />{" "}
        <ServiceCart
          name={"Michael Adams"}
          img={services5}
          week={"10"}
          title={"Front-End Web Development"}
          level={"Intermediate"}
          desc={
            "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
          }
        />{" "}
        <ServiceCart
          name={"Jennifer Wilson"}
          img={services6}
          week={"6"}
          title={"Advanced JavaScript"}
          level={"Advance"}
          desc={
            "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
          }
        />
      </div>
    </div>
  );
};

export default ServicesComponents;
