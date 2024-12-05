import React, { useEffect, useRef, useState } from 'react';
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
import SideBar from './sidebar';


const Career = () => {
    useEffect(() => {
        // Initialize AOS after the component mounts
        AOS.init({
        });

        // Refresh AOS on scroll to ensure animations trigger correctly
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page-main page-current custom_styles">
            <div className="page-toload queremos-page" data-bodyclass="queremos">
                <HeroSection />
               
                <main className="page-content" role="main">
                    
                    <StartProjectButton />
                    <WeDoSection />
                    <ImageBlocks />
                    <ToSection />
                    <KnowMore />
                    <TestimonialSection />
                    <ImageGrid />
                    <QuizSection />
                    <JobOffers />
                </main>
            </div>
        </div >
    );
};

export default Career;
