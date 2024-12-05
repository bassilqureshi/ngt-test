import React, { useRef, useState } from "react";
// import Button from '@mui/material/Button';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import HeroSection from "./herosection";
import Services from "./ourservices";
import OurGrowth from "./ourgrowth";
import Partners from "./partners";
import Insights from "./insights";
import Careers from "./careers";
// import LoaderHome from "./loading";
import Footer from "../../layout/footer";


const Home = () => {
  // Create a ref to access the video in the HeroSection
  const videoRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(1); // Scrolls to the first section
    }
  };
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        scrollOverflow={true}
        showArrows
        afterLoad={(origin, destination) => {
          const navbar = document.querySelector(".navbar_main");
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

          // Show the navbar when at section index 1, hide it for other sections
          if (destination.index > 0 && navbar) {
            navbar.style.display = "none"; // Hide navbar
          } else if (destination.index === 0 && navbar) {
            navbar.style.display = "block"; // Show navbar
          }
          // Resume video when returning to index 0 section
          if (destination.index === 0 && videoRef.current) {
            videoRef.current.play();
          }

          if (destination.index === 5) {
            toggleActiveClass('.get_to_know_sec', '.zoom-in', '.zoom-out', true);
          }

          if (origin && origin.index === 5) {
            toggleActiveClass('.get_to_know_sec', '.zoom-in', '.zoom-out', false);
          }

        }}
        onLeave={(origin, destination) => {
          // Pause video when leaving index 0 section
          if (origin.index === 0 && videoRef.current) {
            videoRef.current.pause();
          }
          setShowScrollToTop(destination.index > 0);
        }}
        render={({ state, fullpageApi }) => (
          <div>
            <div className="section">
              <HeroSection videoRef={videoRef} />
            </div>
            <div className="section">
              <Services />
            </div>
            <div className="section">
              <Partners />
            </div>
            <div className="section">
              <Careers />
            </div>
            <div className="section">
              <Insights />
            </div>
            <div className="section our_growth_sec">
              <OurGrowth />
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

export default Home;
