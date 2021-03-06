import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;
