import { useEffect } from 'react';
import verge from 'verge';
import { TweenMax, Sine, Elastic, gsap } from "gsap";
import { interpolate } from 'flubber';

export const useCustomAnimation = () => {
    useEffect(() => {
        const startProjectButton = document.querySelector(".cta-start-project");
        const projectButtonBackgroundNew = startProjectButton.querySelector(".cta-bg path");
        const morphBackground = startProjectButton.querySelector(".morph-bg");
        const startProjectSection = document.querySelector(".start-project-container");
        const projectButtonBackground = document.querySelector('.cta-start-project .cta-bg');
        // const morphBackground = document.querySelector('.cta-start-project .morph-bg');

        // Define the paths for morphing
        const startPath = projectButtonBackground.querySelector("path").getAttribute("d");
        const endPath = "M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z";

        // Create the flubber interpolator
        const interpolator = interpolate(startPath, endPath);

        const duration = 2; // duration of each morph cycle
        let progress = 0;  // animation progress

        const timeline = gsap.timeline({ paused: true, repeat: -1, yoyo: true, ease: "sine.out" });

        // Animate the path attribute with the flubber interpolator
        timeline.to({}, {
            duration,
            onUpdate: () => {
                progress = timeline.progress();
                const newPath = interpolator(progress);
                projectButtonBackground.querySelector("path").setAttribute("d", newPath);
            }
        });

        setTimeout(() => {
            timeline.play();
        }, 2000);

        gsap.to(projectButtonBackground.querySelector("path"), 1, {
            // morphSVG: projectButtonBackground.getAttribute("data-init"),
            ease: Elastic.easeOut.config(1, 0.7),
            autoAlpha: 1,
            delay: 1.5,
        });

        gsap.to(startProjectButton.querySelector("h3"), 1, {
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.7),
            autoAlpha: 1,
            delay: 1.8,
            force3D: true,
        });

        gsap.to(startProjectButton.querySelector(".elastic-btn svg"), 1, {
            ease: Elastic.easeOut.config(1, 0.7),
            scale: 1,
            autoAlpha: 1,
            delay: 1.9,
            force3D: true,
        });

        gsap.to(startProjectButton.querySelector(".elastic-btn span"), 1, {
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.7),
            autoAlpha: 1,
            delay: 2,
            force3D: true,
        });

        const updateStartProjectPosition = () => {
            const globalViewportH = window.innerHeight;
            // startProjectSection.style.top = `${window.scrollY + globalViewportH - startProjectSection.offsetHeight - 5}px`;
        };

        // updateStartProjectPosition();

        // window.addEventListener("resize", updateStartProjectPosition);

        return () => {
            timeline.kill();
            // window.removeEventListener("resize", updateStartProjectPosition);
            gsap.set([morphBackground, projectButtonBackground, startProjectButton.querySelector("h3"), startProjectButton.querySelector(".elastic-btn svg"), startProjectButton.querySelector(".elastic-btn span"), startProjectSection], { clearProps: "all" });
        };
    }, []);
};