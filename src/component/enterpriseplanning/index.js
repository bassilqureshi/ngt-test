import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import 'tippy.js/dist/tippy.css';
import "../../custom-style.css";
import HeroSection from "./herosection";
import WhoWeAre from "./whoweare";
import ImageBlocks from "./imageBlocks";
import ServicesSectionOne from "./servicesSectionOne";
import ServicesSectionOneNew from "./servicesSectionOneNew";
import ServicesSectionTwo from "./servicesSectionTwo";
import ServicesSectionTwoNew from "./servicesSectionTwoNew";
import WhyChooseUs from "./whyChooseUs";
import ImageBlockOne from "./imageBlockOne";
import Footer from "../../layout/footer";

const ProjectManagement = () => {
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

          const toggleActiveClass = (containerSelector, fadeUpSelector, fadeDownSelector, add) => {
            const fadeUpElements = document.querySelectorAll(`${containerSelector} ${fadeUpSelector}`);
            const fadeDownElements = document.querySelectorAll(`${containerSelector} ${fadeDownSelector}`);

            fadeUpElements.forEach((el) => {
              el.classList.toggle('active', add);
            });

            fadeDownElements.forEach((el) => {
              el.classList.toggle('active', add);
            });
          };

          if (destination.index === 1) {
            toggleActiveClass('.who_we_sec', '.zoom-in', '.zoom-out', true);
          }

          if (origin && origin.index === 1) {
            toggleActiveClass('.who_we_sec', '.zoom-in', '.zoom-out', false);
          }
        }}
        render={({ state, fullpageApi }) => (
          <div className="estamos-page career_page_main contact_main_page page-toload queremos-page career_page_main">
            <div className="section">
              <HeroSection />
            </div>
            <div className="section who_we_are_section">
              <WhoWeAre />
            </div>
            <div className="section image_block_sec image_block_staff">
              <ImageBlocks />
            </div>
            <div className="section">
              <ServicesSectionOne />
            </div>
            <div className="section">
              <ServicesSectionOneNew />
            </div>
            <div className="section why_choose_main_sec">
              <WhyChooseUs />
            </div>
            <div className="section image_block_sec image_block_staff">
              <ImageBlockOne />
            </div>
            <div className="section">
              <ServicesSectionTwo />
            </div>
            <div className="section">
              <ServicesSectionTwoNew />
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

export default ProjectManagement;
