import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useSequenceDance = () => {
    const containerRef = useRef(null);

    const init = () => {
        const container = containerRef.current;
        const columns = container.querySelectorAll(".columns");

        columns.forEach((column) => {
            // Set initial scale for SVG elements to 0
            gsap.set(column.querySelectorAll("svg"), { scale: 0 });

            // Set initial position and opacity for headings and paragraphs
            gsap.set(column.querySelectorAll("h3"), { y: "40px", opacity: 0 });
            gsap.set(column.querySelectorAll("p"), { y: "40px", opacity: 0 });
        });
    };

    const animate = () => {
        const container = containerRef.current;
        const columns = container.querySelectorAll(".columns");

        // Start a sequence of staggered animations for the SVGs, headings, and paragraphs
        setTimeout(() => {
            columns.forEach((column) => {
                gsap.to(column.querySelectorAll("svg"), {
                    scale: 1,
                    ease: "elastic.out(1, 0.7)",
                    duration: 2,
                    stagger: 0.33,
                    delay: 0.3,
                });
                gsap.to(column.querySelectorAll("h3"), {
                    y: "0px",
                    opacity: 1,
                    ease: "elastic.out(1, 0.5)",
                    duration: 2,
                    stagger: 0.33,
                    delay: 0.2,
                });
                gsap.to(column.querySelectorAll("p"), {
                    y: "0px",
                    opacity: 1,
                    ease: "elastic.out(1, 0.5)",
                    duration: 2,
                    stagger: 0.33,
                    delay: 0.1,
                });
            });
        }, 333); // Delay before starting the animation
    };

    useEffect(() => {
        init();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target); // Stop observing once animation is triggered
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return containerRef;
};

export default useSequenceDance;
