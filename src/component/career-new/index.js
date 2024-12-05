import React, { useEffect, useRef, useState } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import "../../custom-style.css"
import AOS from 'aos';
import Lottie from "lottie-react";
import HeroSection from "./herosection";
import StartProjectButton from "./startProjectButton";
import WeDoSection from "./weDo";
import ImageBlocks from "./imageBlocks";
import ToSection from "./toSection";
import KnowMore from "./knowMore";
import TestimonialSection from "./testimonialSection";
import ImageGrid from "./imageGrid";
import QuizSection from "./quizSection";
import JobOffers from "./jobOffers";
import Footer from "../../layout/footer";
import SideBar from "./sidebar";
import WhoWeAre from "./whoweare";


const Career = () => {
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
    // useEffect(() => {
    //     // Initialize AOS after the component mounts
    //     AOS.init({
    //     });

    //     // Refresh AOS on scroll to ensure animations trigger correctly
    //     const handleScroll = () => {
    //         AOS.refresh();
    //     };

    //     window.addEventListener('scroll', handleScroll);
    // }, []);

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

                    if (destination.index === 2 && aboutUsRef.current) {
                        aboutUsRef.current.triggerAnimation();
                    }

                    setActiveSection(destination.index);

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

                    // Manually trigger animations for sections based on index
                    if (destination.index === 3) {
                        toggleActiveClass('.inovation_container', '.fade-up', '.fade-down', true);
                    }

                    if (origin && origin.index === 3) {
                        toggleActiveClass('.inovation_container', '.fade-up', '.fade-down', false);
                    }

                    if (destination.index === 6) {
                        toggleActiveClass('.about_image_grid', '.zoom-in', '.zoom-out', true);
                    }

                    if (origin && origin.index === 6) {
                        toggleActiveClass('.about_image_grid', '.zoom-in', '.zoom-out', false);
                    }
                }}
                render={({ state, fullpageApi }) => (
                    <div className="page-toload queremos-page career_page_main">
                        <div className="section">
                            <HeroSection />
                        </div>
                        <div className="section who_we_are_section">
                            {/* <SideBar activeSection={activeSection} fullpageApi={fullpageApi} /> */}
                            <WhoWeAre />
                        </div>
                        <div className="section image_block_sec">
                            <ImageBlocks />
                        </div>
                        <div className="section to_bullets_sec">
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

export default Career;
