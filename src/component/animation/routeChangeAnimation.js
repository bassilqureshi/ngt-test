
import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { useLocation } from 'react-router-dom';

const RouteChangeAnimation = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const coverRef = useRef(null);
  const introRef = useRef(null);
  // const [elements, setElements] = useState({})
  // const [isFirstTime, setIsFirstTime] = useState(true)
  const location = useLocation();

  // useEffect(() => {
  //   const el = {
  //     svgElement: svgRef.current,
  //     pathElement: pathRef.current,
  //     coverElement: coverRef.current,
  //     introElement: introRef.current,
  //   }
  //   setElements(el);
  //   el.coverElement.style.transform = 'translateY(200vh)';
  //   el.svgElement.style.transform = 'translateY(200vh)';
  // }, []);

  useEffect(() => {
    const elements = {
      svgElement: svgRef.current,
      pathElement: pathRef.current,
      coverElement: coverRef.current,
      introElement: introRef.current,
    }
    // if (!isFirstTime) {
      const page = location.pathname;

      // Define color mapping based on route
      const routeColors = {
        '/': '#5930ac',
        '/about': '#5930ac',
        '/services': '#006cfc',
        '/career': '#49e2bb',
        '/insights': '#006cfc',
        '/contact-us': '#f77b81',
        '/training': '#5930ac',
        '/jobs': '#5930ac',
        '/managed-it-services': '#5930ac',
        '/information-security': '#5930ac',
        '/enterprise-platform-services': '#5930ac',
        '/enterprise-planning': '#5930ac',
        '/staff-augmentation': '#5930ac',
        '/technology-procurement': '#5930ac',
        '/office-in-a-box': '#5930ac',
        '/project-management': '#5930ac',
      };

      // Get the color based on the current route
      const coverColor = routeColors[page] || '#5930ac'; // Default color


      if (!elements.svgElement || !elements.pathElement || !elements.coverElement || !elements.introElement) return;

      // Ensure the cover div and SVG start from the bottom
      elements.coverElement.style.transform = 'translateY(200vh)';
      elements.svgElement.style.transform = 'translateY(200vh)';

      elements.coverElement.style.backgroundColor = coverColor;
      elements.pathElement.style.fill = coverColor;

      // Create an anime timeline
      const timeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: 2000,
      });

      // Add animations to the timeline
      timeline
        .add({
          targets: [elements.coverElement, elements.svgElement],
          translateY: ['100vh', '-100vh'],
          duration: 2000,
          offset: 0, // Starts after the coverElement and SVG have fully covered the screen
          complete: () => {
            // Reset the cover div and SVG position to the bottom
            elements.coverElement.style.transform = 'translateY(200vh)';
            elements.svgElement.style.transform = 'translateY(200vh)';
          }
        });

      // Animate the path
      anime({
        targets: elements.pathElement,
        duration: 1000,
        easing: 'easeOutQuad',
        d: elements.pathElement.getAttribute('data-id'),
      });
    // } else {
      // setIsFirstTime(false);
    // }
  }, [location]);

  return (
    <div
      ref={introRef}
      style={{
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        ref={coverRef}
        style={{
          position: 'absolute',
          top: '-100vh',
          left: 0,
          width: '100%',
          height: '101vh',
          backgroundColor: 'black', // Adjust as needed
          zIndex: 9998,
        }}
      />
      <svg
        ref={svgRef}
        className="shape"
        width="100%"
        height="30vh" // Adjust height as needed
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 9997, // Ensure SVG is below the cover div
          transformOrigin: '50% 0%',
        }}
      >
        <path
          ref={pathRef}
          d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"
          data-id="M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z"
        />
      </svg>
    </div>
  );
};

export default RouteChangeAnimation;

