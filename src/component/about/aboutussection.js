import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";

// Using forwardRef to pass the ref from the parent component
const AboutUs = forwardRef((props, ref) => {
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const leftSectionRef = useRef(null);

  // Function to trigger the GSAP animation
  const triggerAnimation = () => {
    const timeline = gsap.timeline();

    // Animate left section with curtain effect
    timeline.fromTo(
      leftSectionRef.current,
      { x: -200, opacity: 0 }, // Initially off screen and invisible
      { 
        x: 0, 
        opacity: 1, 
        duration: 2, // Increased duration for smoother effect
        ease: "power4.out", // Smoother easing function
        // onComplete: () => {
        //   // Optionally, you can add a slight bounce effect after the animation completes
        //   gsap.to(leftSectionRef.current, {
        //     scale: 1.02,
        //     duration: 0.3,
        //     ease: "power4.out(1, 0.3)",
        //     yoyo: true
        //   });
        // }
      }
    );

    // Animate first bubble
    timeline.fromTo(
      bubble1Ref.current,
      { x: -100, opacity: 0 }, // Initially off screen and invisible
      { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" } // Animate in from left
    )
    // Animate second bubble
    .fromTo(
      bubble2Ref.current,
      { x: 100, opacity: 0 }, // Initially off screen and invisible
      { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.4" // Start 0.4 seconds before the first bubble animation completes
    );
  };

  // Expose triggerAnimation to the parent component via ref
  useImperativeHandle(ref, () => ({
    triggerAnimation,
  }));

  return (
    <div id="about_section">
      <div ref={leftSectionRef} className="left-section"></div>
      <div className="right-section">
        <div className="chat-container">
          <div ref={bubble1Ref} className="bubble bubble-left">
            We champion a culture of exceptional standards and visionary thinking.
          </div>
          <div ref={bubble2Ref} className="bubble bubble-right">
            We leverage technology to deliver tailored services to our clients, guided by three Essential Values.
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
