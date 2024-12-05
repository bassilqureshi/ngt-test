import React from "react";
import useViewportAnimations from "../../hooks/useViewportAnimations";

const Experience = () => {
    useViewportAnimations();


    return (
        <div id="experience_section" className="lg:h-[100vh] md:h-[100vh] flex items-center justify-center text-center">
            <div className="section_content">
                <h2 className="fade-down">AN ENDURING EXPERIENCE.</h2>
                <p className="fade-up">We're about bridging gaps—in work, in relationships, in tech. We invest everything to craft lifelong experiences.</p>
            </div>
        </div>
    );
};

export default Experience;
