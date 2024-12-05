import React from "react";
import HeroSection from "./herosection";
import BelowHero from "./belowhero";
import Whychoosenextgenit from "./whychoosenextgenit";
import ErpSection from "./erpsection";
import SideBar from "./sidebar";

const EnterprisePlanning = () => {
  return (
    <div>
      <HeroSection />
      <SideBar/>
      <BelowHero />
      <Whychoosenextgenit />
      <ErpSection/>
    </div>
  );
};

export default EnterprisePlanning;
