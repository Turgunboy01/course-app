import React from "react";
import CouseBanner from "../../components/course/CouseBanner";
import CourseCards from "../../components/course/CourseCards";

const CourseContainer = () => {
  return (
    <div className=" overflow-hidden">
      <CouseBanner />
      <CourseCards />
    </div>
  );
};

export default CourseContainer;
