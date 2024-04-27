import React from "react";
import ArchieventCard from "./ArchieventCard";
import aboutCard1 from "../../../public/about/icon1.png";
import aboutCard2 from "../../../public/about/icon2.png";
import aboutCard3 from "../../../public/about/icon3.png";
import aboutCard4 from "../../../public/about/icon4.png";
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

const Achievements = () => {
  return (
    <div id="archimed" className="container mx-auto px-5 mt-[30px] md:mt-24">
      <div className="mb-[80px]">
        <h1 className="text-[30px] lg:text-[48px] font-medium leading-[150%] text-[#333333]">
          Achievements
        </h1>
        <p className=" font-normal text-[16px] lg:text-[18px] text-[#59595A]">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {cards.map((item, index) => (
          <ArchieventCard
            title={item.title}
            key={index}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
