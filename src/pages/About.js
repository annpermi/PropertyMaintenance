import React from "react";
import Features from "../components/Features";
import { InfoData, InfoDataTwo, InfoDataThree } from "../data/InfoData";

const About = () => {
  return <Features {...InfoDataThree} />;
};

export default About;
