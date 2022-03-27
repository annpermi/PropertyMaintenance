import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Listings from "../components/Listings";
import { InfoData, InfoDataTwo, InfoDataThree } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
import InfoSection from "../components/InfoSection";

export const scrollDown = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
};

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings {...InfoDataTwo} />
      <Features {...InfoDataThree} />
    </>
  );
};

export default Home;
