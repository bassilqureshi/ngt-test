import React, { useEffect, useState } from 'react';
import { useTextFireworks } from "../../hooks/useTextFireworks";

const HeroSection = () => {
  const h1Options = {
    animationType: "jellyType",
    delay: 0.5,
    setupArgs: { yValue: 20, animationTime: 0.8 }
  };

  // Options for the smoothEntrance animation for h2
  const h2Options = {
    animationType: "smoothEntrance",
    delay: 0.5,
    setupArgs: { yValue: 20, animationTime: 0.8 }
  };

  // Using the custom hook for both h1 and h2 elements
  const { elementRef: h1Ref, triggerAnimation: triggerH1Animation } = useTextFireworks(h1Options, () => {
    console.log("H1 Animation complete!");
  });

  const { elementRef: h2Ref, triggerAnimation: triggerH2Animation } = useTextFireworks(h2Options, () => {
    console.log("H2 Animation complete!");
  });

  useEffect(() => {
    // GIF reload and display logic
    const gif = document.getElementById('gifImage');
    gif.style.display = 'none'; // Hide the GIF initially
    gif.src = gif.src + '?' + new Date().getTime(); // Force reload of the GIF

    setTimeout(() => {
      gif.style.display = 'block'; // Show the GIF after 5ms
    }, 5);

    // Trigger animations for both h1 and h2
    triggerH1Animation();
    triggerH2Animation();

  }, [triggerH1Animation, triggerH2Animation]);

  return (
    <>
      <header className="page-header main_career_header">
        <div className="background-wrapper">
          <div className="animation_banner">
            <div className="animation_gif">
              <img id="gifImage" src="/Career/animat.gif" alt="" style={{ display: 'none' }} />
            </div>
          </div>
          <div className="header-image-wrapper">
            <div className="block-bg-cover">
              <img className="background-image element-cover" src="/Career/careers-header-image.jpg" alt="" />
              {/* <picture>
                <source srcSet="/Career/careers-header-image.jpg" media="(max-width: 414px)" />
                <source srcSet="/Career/careers-header-image.jpg" media="(max-width: 768px)" />
                <img className="background-image element-cover" src="/Career/careers-header-image.jpg" alt="" />
              </picture> */}
            </div>
          </div>
          {/* <div className="header-pictogram-wrapper">
            <picture>
              <source srcSet="careers-pictogram-phone.png" media="(max-width: 414px)" />
              <img className="header-pictogram" src="careers-pictogram.png" alt="" />
            </picture>
          </div> */}
          <div className="row expanded align-middle medium-collapse">
            <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-offset-4 large-9 medium-offset-4  columns">
              <div>
                <h1 ref={h1Ref}>Join Us. <br /> Embrace the Experience.</h1>
                <h2 ref={h2Ref}>Craft Your Career With NGTSOL</h2>
              </div>
            </div>

          </div>
          <div className="social-wrapper">
            <h5>Follow NGTSOL</h5>
            <ul className="social-links">
              <li className="social-item">
                <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                  <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px]" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                  <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px]" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                  <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px]" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                  <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px]" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                  <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mouse-icon left-side">
          <span className="scroll-helper">Scroll</span>
          <span className="wheel"></span>
        </div>
      </header>

    </>
  );
};

export default HeroSection;
