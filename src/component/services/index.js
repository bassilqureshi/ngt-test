import React, { useEffect, useState, useRef } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import Servicespage from "./servicespage";
import Footer from "../../layout/footer";

const Services = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const handleLeave = (origin, destination) => {
    // Show the button only after leaving the first section
    setShowScrollToTop(destination.index > 0);
  };

  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(1); // Scrolls to the first section
    }
  };
  return (
    <>

      <ReactFullpage
        className="page-main page-current custom_styles"
        scrollingSpeed={1000}
        scrollOverflow={true}
        onLeave={handleLeave}
        showArrows
        afterLoad={(origin, destination) => {
          const navbar = document.querySelector(".navbar_main");

          // Show the navbar when at section index 1, hide it for other sections
          if (destination.index > 0 && navbar) {
            navbar.style.display = "none"; // Hide navbar
          } else if (destination.index === 0 && navbar) {
            navbar.style.display = "block"; // Show navbar
          }
        }}
        render={({ state, fullpageApi }) => (
          <div className="">
            <div className="section">
              <Servicespage />
            </div>
            <div className="section main_footer_sec">
              <Footer fullpageApi={fullpageApi} />
            </div>
          </div>
        )}
      />
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}


    </>
  );
};

export default Services;
