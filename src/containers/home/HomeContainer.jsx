import React from "react";
import HomeHeroComponents from "../../components/home/HomeHeroComponents";
import CompanyComponents from "../../components/home/CompanyComponents";
import ContainerPage from "../../components/home/ContainerPage";
import BenefitComponents from "../../components/home/BenefitComponents";
import ServicesComponents from "../../components/home/ServicesComponents";
import TestimonialsContent from "../../components/home/TestimonialsContent";
import Pricing from "../../components/home/Pricing";
import Questions from "../../components/home/Questions";

const HomeContainer = () => {
  return (
    <div className=" overflow-hidden">
      <HomeHeroComponents />
      <CompanyComponents />
      <ContainerPage />
      <BenefitComponents />
      <ServicesComponents />
      <TestimonialsContent />
      <Pricing value={false} />
      <Questions />
    </div>
  );
};

export default HomeContainer;
