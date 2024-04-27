import React from "react";
import ArchieventCard from "./ArchieventCard";
import aboutCard1 from "../../../public/about/icon5.png";
import aboutCard2 from "../../../public/about/icon6.png";
import aboutCard3 from "../../../public/about/icon7.png";
import aboutCard4 from "../../../public/about/icon8.png";

const cards = [
  {
    img: aboutCard1,
    title: "Trusted by Thousands",
    desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    img: aboutCard2,
    title: "Award-Winning Courses",
    desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    img: aboutCard3,
    title: "Positive Student Feedback",
    desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    img: aboutCard4,
    title: "Industry Partnerships",
    desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
  },
];

const Goals = () => {
  return (
    <div className=" container mx-auto px-4 mt-[180px] " id="goals">
      <div className="">
        <h1 className="text-[48px] font-medium leading-[150%] text-[#333333]">
          Our Goals
        </h1>
        <p className=" font-normal text-[18px] text-[#59595A]">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. <br /> Through our carefully crafted courses, we aim to
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-20">
        {cards.map((item, index) => (
          <ArchieventCard
            key={index}
            title={item.title}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
