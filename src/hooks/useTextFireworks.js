import { useEffect, useRef } from "react";
import { TweenMax, TimelineMax, Back } from "gsap/all";
import verge from "verge"; // assuming verge is a utility for viewport checking
import SplitType from 'split-type';

export function useTextFireworks(options, callback) {
  const elementRef = useRef(null);
  const timelineRef = useRef(null);

  // Utility function to split text into spans
  const splitText = (element) => {
    const text = element.textContent;
    element.innerHTML = text
      .split('')
      .map(char => `<span class="char">${char}</span>`)
      .join('');
    return element.querySelectorAll('.char');
  };

  useEffect(() => {
    const { animationType, delay } = options;
    const element = elementRef.current;

    if (!element) return;

    const timeline = new TimelineMax({ paused: true });
    const splitText = new SplitType(element, { types: 'words, chars' });
    const characters = splitText.chars;
    // const characters = splitText(element); // Manually split text into characters

    switch (animationType) {
      case "jellyType":
        TweenMax.set(element, { opacity: 1, perspective: 1000 });
        timeline.staggerFrom(
          characters,
          0.8,
          {
            opacity: 0,
            scale: 0,
            y: 10,
            rotationX: 90,
            transformOrigin: "0% 50% -50",
            ease: Back.easeOut.config(1)
          },
          0.015,
          "+=" + delay
        );
        break;

      case "smoothEntrance":
        const yValue = options.setupArgs ? options.setupArgs.yValue : 20;
        const animationTime = options.setupArgs ? options.setupArgs.animationTime : 0.8;
        const opacityValue = element.closest(".header-text") ? 0.8 : 1;

        TweenMax.set(element, { opacity: opacityValue });
        timeline.staggerFrom(
          characters,
          animationTime,
          {
            opacity: 0,
            y: yValue,
            ease: Back.easeOut.config(1)
          },
          0.015,
          "+=" + delay,
          () => {
            const bodyClasses = document.body.classList;
            if (
              bodyClasses.contains("somos") ||
              bodyClasses.contains("estamos") ||
              bodyClasses.contains("queremos") ||
              bodyClasses.contains("home")
            ) {
              if (typeof callback === "function") callback();
            }
          }
        );
        break;
    }

    timelineRef.current = timeline;

    // Initialize animation if in viewport
    const initAnimation = () => {
      if (verge.inViewport(element) && !element.classList.contains("js-animated")) {
        document.querySelector(".page-current .page-header h1").classList.add("js-animated");
        timeline.play();
      }
    };

    // Return cleanup function
    return () => {
      TweenMax.killTweensOf(timeline);
      timeline.kill();
      timelineRef.current = null;
    };
  }, [options, callback]);

  const triggerAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.play();
    }
  };

  const killAnimation = () => {
    if (timelineRef.current) {
      TweenMax.killTweensOf(timelineRef.current);
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };

  return {
    elementRef,
    triggerAnimation,
    killAnimation
  };
}
