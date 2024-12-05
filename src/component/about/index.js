import React, { useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import "../../custom-style.css";
import HeroSection from "./herosection";
import WhoWeAre from "./whoweare";
import AboutUs from "./aboutussection";
import InovationSection from "./inovationSection";
import ImageGrid from "./imageGrid";
import NGTSOLTimeline from "./ngtsoltimeline";
import MeetDirectors from "./meetdirectors";
import MeatTheTeam from "./meettheteam";
import Experience from "./experience";
import CEOMessage from "./ceomessage";
import Footer from "../../layout/footer";
import SideBar from "./sidebar";

const About = () => {
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
  const [activeSection, setActiveSection] = useState(0); // Track the active section

  return (
    <>


      <ReactFullpage
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

          // Trigger animation in AboutUs when reaching the third section (index 2)
          if (destination.index === 2 && aboutUsRef.current) {
            aboutUsRef.current.triggerAnimation(); // Call animation trigger function
          }

          // Update the active section index
          setActiveSection(destination.index);

          // Utility function to toggle active class on elements
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

          // Manually trigger animations for sections based on index
          if (destination.index === 3) {
            toggleActiveClass('.inovation_container', '.fade-up', '.fade-down', true);
          }

          if (origin && origin.index === 3) {
            toggleActiveClass('.inovation_container', '.fade-up', '.fade-down', false);
          }

          if (destination.index === 8) {
            toggleActiveClass('#experience_section', '.fade-up', '.fade-down', true);
          }

          if (origin && origin.index === 8) {
            toggleActiveClass('#experience_section', '.fade-up', '.fade-down', false);
          }

          if (destination.index === 5) {
            toggleActiveClass('.timeline', '.fade-up', '.fade-down', true);
          }

          if (origin && origin.index === 5) {
            toggleActiveClass('.timeline', '.fade-up', '.fade-down', false);
          }

          if (destination.index === 6) {
            toggleActiveClass('#our-board', '.fade-up', '.fade-down', true);
          }

          if (origin && origin.index === 6) {
            toggleActiveClass('#our-board', '.fade-up', '.fade-down', false);
          }

          if (destination.index === 7) {
            toggleActiveClass('.meet_team', '.fade-up', '.fade-down', true);
          }

          if (origin && origin.index === 7) {
            toggleActiveClass('.meet_team', '.fade-up', '.fade-down', false);
          }

          if (destination.index === 4) {
            toggleActiveClass('.about_image_grid', '.zoom-in', '.zoom-out', true);
          }

          if (origin && origin.index === 4) {
            toggleActiveClass('.about_image_grid', '.zoom-in', '.zoom-out', false);
          }

          if (destination.index === 1) {
            toggleActiveClass('.who_we_sec', '.zoom-in', '.zoom-out', true);
          }

          if (origin && origin.index === 1) {
            toggleActiveClass('.who_we_sec', '.zoom-in', '.zoom-out', false);
          }
        }}
        render={({ state, fullpageApi }) => (
          <div>
            <div className="section">
              <HeroSection />
            </div>
            <div className="section who_we_are_section">
              <SideBar activeSection={activeSection} fullpageApi={fullpageApi} />
              <WhoWeAre />
            </div>
            <div className="section">
              <AboutUs ref={aboutUsRef} />
            </div>
            <div className="section">
              <InovationSection />
            </div>
            <div className="section">
              <ImageGrid />
            </div>
            <div className="section timeline_section">
              <SideBar activeSection={activeSection} fullpageApi={fullpageApi} />
              <NGTSOLTimeline />
            </div>
            <div className="section board_section">
              <SideBar activeSection={activeSection} fullpageApi={fullpageApi} />
              <MeetDirectors />
            </div>
            <div className="section team_section">
              <SideBar activeSection={activeSection} fullpageApi={fullpageApi} />
              <MeatTheTeam />
            </div>
            <div className="section">
              <Experience />
            </div>
            <div className="section ceo_section">
              <SideBar activeSection={activeSection} fullpageApi={fullpageApi} />
              <CEOMessage />
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

export default About;
