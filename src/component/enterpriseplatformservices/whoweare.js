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
        <h2 className="text-center">Unlocking Your Business Potential Through Innovation</h2>
        <h3 className="js-bigText-element text-black z-40 font-[100] text-[14px] md:text-[28px] lg:text-[48px] w-[90%] lg:w-[77%] leading-[17px] md:leading-[30px] lg:leading-[58px] text-center">
          Seamless integration, exceptional performance, and continuous innovation – we empower your business to thrive in the digital age
        </h3>
      </div>

    </div>
  );
};

export default WhoWeAre;
