import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedText = ({ text, className }) => {
  const [animatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const wordArray = text.split(' ');
    setAnimatedText(wordArray);
  }, [text]);

  return (
    <div className={`${className} inline-block`}>
      {animatedText.map((word, index) => (
        <span key={index} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 animate-slideIn"
              style={{
                animationDelay: `${2 + (index + charIndex) * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
          {index < animatedText.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [showText, setShowText] = useState(false);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  const location = useLocation(); // Hook to detect route change

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4700); // 4.7 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  useEffect(() => {
    // Trigger Lottie animation when the route changes
    setIsAnimationVisible(false); // Reset visibility
    const timer = setTimeout(() => {
      setIsAnimationVisible(true); // Show animation after a short delay
    }, 100); // Slight delay to ensure proper re-rendering

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]); // Dependency on location to re-trigger animation on route change

  const gifUrl = `/About/banner_logo_animtn.gif?${timestamp}`;

  return (
    <>
      <div className={`training_hero_sec relative h-[100vh] lg:h-[100vh] flex items-center z-30 justify-center overflow-hidden`}>
        <img
          className="absolute inset-0 w-full h-full object-fill"
          src="/StaffAugmentation/StaffAugmentationHero.png"
          alt="Staff Augmentation"
        />

        <div className="training_hero_text relative w-full xl:mt-[-30px] 2xl:mt-[-100px] contact_page_main">
          <div className="relative z-20 flex flex-col gap-y-10 text-left items-center justify-center">
            {/* text-[#5930ac]  */}
            <AnimatedText
              text="Staff Augmentation"
              className="contact_maintitle text-[50px] 
                lg:text-[55px] 
                xl:text-[60px] 
                text-[#ffffff] 
                font-[600] 
                md:w-[40%] 
                2xl:w-[50%] 
                leading-[50px] 
                lg:leading-[80px]
                text-center"
            />
            {/* <h2 className={`contact_subtitle text-[#ffffff] mt-[-35px] text-center font-[300] hidden lg:flex text-[20px] transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
              Dream big. Push boundaries. We'll secure your journey
            </h2> */}
          </div>
        </div>
      </div>

      {/* <div className="absolute lg:bottom-6 2xl:bottom-20 w-full z-40">
        <div className="hidden lg:flex justify-between items-center z-20">
          <div className="w-[90%] lg:pl-[40px] xl:pl-[60px]" style={{ display: 'flex', alignItems: 'center' }}>
            <p className="text-[#000000] w-[160px]">Follow NGTSOL </p>
            <img src="/About/Horizontal Divider.svg" alt="Underline Hero" className="h-[3px] lg:mx-3 xl:mx-4" />
            <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px] mr-4" />
            </a>
            <a href="https://www.facebook.com/NGTSolUSA" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px] mr-4" />
            </a>
            <a href="https://twitter.com/ngtsol" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px] mr-5" />
            </a>
            <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px] mr-5" />
            </a>
            <a href="https://www.instagram.com/ngtsolusa/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
