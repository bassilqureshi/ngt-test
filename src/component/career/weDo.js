import React, { useEffect, useState } from 'react';
import useViewportAnimations from "../../hooks/useViewportAnimations";

const WeDoSection = () => {
  useViewportAnimations();

  return (
    <>
      <section className="we-do">
        <div className="hero-text row text-center align-center small-collapse">
          <div className="xxlarge-10 medium-12 small-14 columns">
            <h3 className="js-bigText-element text-[48px]">Our approach at NGTSOL is centered around creating wonderful experiences. We are committed to supporting your joy, wellbeing, and advancement. Our main aim is to guarantee that your time spent with us is always a positive and constructive for your personal and professional journey.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeDoSection;
