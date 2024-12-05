import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import 'tippy.js/dist/tippy.css';
import "../../custom-style.css";
import MapSection from "./mapSection";
import WhoWeAre from "./whoweare";
import HeroSection from "./herosection";
import CounterMap from "./counterMap";
import ContactForm from "./contactForm";
import Footer from "../../layout/footer";

const ContactUs = () => {
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
  const aboutUsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash && window.fullpage_api) {
      const sectionMapping = {
        "#contact-form-section": 5, // Update this index to match your section's position
      };

      const sectionIndex = sectionMapping[location.hash];
      if (sectionIndex) {
        window.fullpage_api.moveTo(sectionIndex);
      }
    }
  }, [location.hash]);

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
          <div className="estamos-page career_page_main contact_main_page">
            <div className="section">
              <HeroSection />
            </div>
            <div className="section who_we_are_section">
              <WhoWeAre />
            </div>
            <div className="section map_main_sec">
              <MapSection />
            </div>
            <div className="section counter_map_sec">
              <CounterMap />
            </div>
            <div id="contact-form-section" className="section contact_form_main_sec">
              <ContactForm />
            </div>
            {/* <div className="section to_bullets_sec">
              <ToSection />
            </div>
            <div className="section know_more_sec">
              <KnowMore />
            </div>
            <div className="section testimonial_sec">
              <TestimonialSection />
            </div>
            <div className="section image_grid_sec">
              <ImageGrid />
            </div>
            <div className="section join_team">
              <QuizSection />
            </div>
            <div className="section job_offer_sec">
              <JobOffers />
            </div> */}
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

export default ContactUs;
