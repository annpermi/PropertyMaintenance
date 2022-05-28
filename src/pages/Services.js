import { data } from "../data/data";
import InfoSection from "../components/InfoSection";

const Services = () => {
  return (
    <>
      <InfoSection {...data.infoDataFour} />
      <InfoSection {...data.infoDataFive} />
      <InfoSection {...data.infoDataSix} />
    </>
  );
};

export default Services;
