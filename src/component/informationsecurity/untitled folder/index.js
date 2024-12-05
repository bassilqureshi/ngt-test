import React from "react";
import HeroSection from "./herosection";
import BelowHero from "./belowhero";
import SecurityOperation from "./securityoperationcenter";
import GovernanceRisk from "./governancerisk";
import SideBar from "./sidebar";

const InformationSecurity = () => {
  return (
    <div>
      <HeroSection />
      <SideBar/>
      <BelowHero />
      <SecurityOperation />
      <GovernanceRisk/>
   

    </div>
  );
};

export default InformationSecurity;
