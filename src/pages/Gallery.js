import React from "react";
import Listings from "../components/Listings";
import { InfoData, InfoDataTwo, InfoDataThree } from "../data/InfoData";

const Gallery = () => {
  return <Listings {...InfoDataTwo} />;
};

export default Gallery;
