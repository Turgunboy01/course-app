import React from "react";
import CouseCard from "./CouseCard";
import img1 from "../../../public/course/Image1.png";
import img2 from "../../../public/course/Image2.png";
import img3 from "../../../public/course/Image3.png";
import img4 from "../../../public/course/Image4.png";
import img5 from "../../../public/course/Image5.png";
import img6 from "../../../public/course/Image6.png";
import img7 from "../../../public/course/Image7.png";
import img8 from "../../../public/course/Image8.png";
import img9 from "../../../public/course/Image9.png";
import img10 from "../../../public/course/Image10.png";
import img11 from "../../../public/course/Image11.png";
import img12 from "../../../public/course/Image12.png";
import img13 from "../../../public/course/Image13.png";
import img14 from "../../../public/course/Image14.png";
import img15 from "../../../public/course/Image15.png";
const cards = [
  {
    name: "By John Smith",
    title: "Web Design Fundamentals",
    direction: "Introduction to HTML",
    direction2: "Styling with CSS",
    direction3: "Introduction to Responsive Design",
    direction4: "Design Principles for Web",
    direction5: "Building a Basic Website",
    level: "Beginner",
    week: "4",
    img1: img1,
    img2: img2,
    img3: img3,
    desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    name: "By Emily Johnson",
    title: "UI/UX Design",
    direction: "Introduction to UI/UX Design",
    direction2: "User Research and Personas",
    direction3: "Wireframing and Prototyping",
    direction4: "Visual Design and Branding",
    direction5: "Usability Testing and Iteration",
    level: "Intermediate",
    week: "6",
    img1: img4,
    img2: img5,
    img3: img6,
    desc: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  },
  {
    name: "By David Brown",
    title: "Mobile App Development",
    direction: "Introduction to Mobile App Development",
    direction2: "Fundamentals of Swift Programming (iOS)",
    direction3: "Fundamentals of Kotlin Programming (Android)",
    direction4: "Building User Interfaces",
    direction5: "App Deployment and Testing",
    level: "Intermediate",
    week: "8",
    img1: img7,
    img2: img8,
    img3: img9,
    desc: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
  },
  {
    name: "By Sarah Thompson",
    title: "Graphic Design for Beginners",
    direction: "Introduction to Graphic Design",
    direction2: "Typography and Color Theory",
    direction3: "Layout Design and Composition",
    direction4: "Image Editing and Manipulation",
    direction5: "Designing for Print and Digital Media",
    level: "Beginner",
    week: "10",
    img1: img10,
    img2: img11,
    img3: img12,
    desc: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
  },
  {
    name: "By Michael Adams",
    title: "Front-End Web Development",
    direction: "HTML Fundamentals",
    direction2: "CSS Styling and Layouts",
    direction3: "JavaScript Basics",
    direction4: "Building Responsive Websites",
    direction5: "Introduction to Bootstrap and React",
    level: "Intermediate",
    week: "10",
    img1: img13,
    img2: img14,
    img3: img15,
    desc: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
  },
];

const CourseCards = () => {
  return (
    <div className="container mx-auto mt-[50px] md:mt-[100px]">
      {cards.map((item, index) => (
        <CouseCard
          name={item.name}
          key={index}
          direction={item.direction}
          direction2={item.direction2}
          direction3={item.direction3}
          direction4={item.direction4}
          direction5={item.direction5}
          week={item.week}
          img1={item.img1}
          img2={item.img2}
          img3={item.img3}
          lavel={item.level}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default CourseCards;
