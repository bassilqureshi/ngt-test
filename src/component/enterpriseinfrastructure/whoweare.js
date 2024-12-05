import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useViewportAnimations from "../../hooks/useViewportAnimations";

const WhoWeAre = () => {
  useViewportAnimations();


  return (
    <div id="who-we-are" className="who_we_sec lg:h-[100vh] md:h-[100vh] flex items-center">
      <div className="bg_logo_img zoom-in">
        <img src="/About/ngt-bg-logo.svg" />
      </div>
      <div>
        <h2 className="text-center">Your Preferred Managed IT Services Partner</h2>
        <h3 className="js-bigText-element text-black z-40 font-[100] text-[14px] md:text-[28px] lg:text-[48px] w-[90%] lg:w-[77%] leading-[17px] md:leading-[30px] lg:leading-[58px] text-center">
          At NGTSOL, we offer comprehensive solutions to optimize your IT infrastructure, improve efficiency, and enhance security—empowering you to focus on your core business goals.
        </h3>
      </div>

    </div>
  );
};

export default WhoWeAre;
