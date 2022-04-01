import React from "react";
import Features from "../components/Features";
import { data } from "../data/data";

const About = () => {
  return <Features {...data.infoDataThree} />;
};

export default About;
