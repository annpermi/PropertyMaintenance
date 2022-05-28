import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Listings from "../components/Listings";
import { data } from "../data/data";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";

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
      <Hero {...data.hero} />
      <InfoSection {...data.infoData} />
      <Listings {...data.infoDataTwo} />
      <Features {...data.infoDataThree} />
      <Testimonials />
    </>
  );
};

export default Home;
