import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import 'tippy.js/dist/tippy.css';
import "../../custom-style.css";
import HeroSection from "./herosection";
import WhoWeAre from "./whoweare";
import ServicesSectionOne from "./servicesSectionOne";
import ServicesSecuritySectionTwo from "./servicesSecuritySectionTwo";
import Footer from "../../layout/footer";
import ServicesSectionTwo from "./servicesSectionTwo";
import ServicesOperationTwo from "./servicesOperationTwo";
import ServicesSectionThree from "./servicesSectionThree";
import ServicesGovTwo from "./servicesGovTwo";
import ServicesGovThree from "./servicesGovThree";
import ServicesGovFour from "./servicesGovFour";
import ServicesSectionFour from "./servicesSectionFour";

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
            <div className="section info_secu_cons">
              <ServicesSectionOne />
            </div>
            <div className="section info_secu_cons">
              <ServicesSecuritySectionTwo />
            </div>
            <div className="section info_secu_operat">
              <ServicesSectionTwo />
            </div>
            <div className="section">
              <ServicesOperationTwo />
            </div>
            <div className="section">
              <ServicesSectionThree />
            </div>
            <div className="section">
              <ServicesGovTwo />
            </div>
            <div className="section">
              <ServicesGovThree />
            </div>
            <div className="section">
              <ServicesGovFour />
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
