import React from "react";
import Listings from "../components/Listings";
import { data } from "../data/data";

const Gallery = () => {
  return <Listings {...data.infoDataTwo} />;
};

export default Gallery;
