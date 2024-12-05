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
        <h2 className="text-center">Stay Ahead with NGTSOL's Comprehensive Training Programs</h2>
        <h3 className="js-bigText-element text-black z-40 font-[100] text-[14px] md:text-[28px] lg:text-[48px] w-[90%] lg:w-[77%] leading-[17px] md:leading-[30px] lg:leading-[58px] text-center">
          At NGTSOL, we believe that empowering your team with the right skills is the foundation for driving innovation and achieving sustainable growth. Our training programs are designed to deliver practical, real-world knowledge that aligns with your organization's objectives. With a focus on continuous learning, we ensure your team stays ahead of the curve in today’s fast-evolving tech landscape.
        </h3>
      </div>

    </div>
  );
};

export default WhoWeAre;
