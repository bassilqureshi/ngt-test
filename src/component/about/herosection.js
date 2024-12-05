import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Lottie from "lottie-react";
import LogoAnimation from "../../data.json";

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
      <div className={`relative h-[100vh] lg:h-[100vh] flex items-center z-30 justify-center bg-[#7245CE] overflow-hidden`}>
        <img
          className="banner_img_main absolute inset-0 w-full h-full object-fill"
          src="/About/Abouthero.png"
          alt="Abouthero"
        />

        <div className="relative main_about_caption w-full xl:mt-[-30px] 2xl:mt-[-100px]">
          <div className="absolute about_banner_logo inset-0 hidden lg:flex items-center justify-center z-10">
            {isAnimationVisible && (
              <Lottie className='xl:w-[360px] hidden md:flex 2xl:w-[370px] xl:h-[600px] 2xl:h-[910px] float-animation' animationData={LogoAnimation} loop={false} />
            )}
          </div>
          <div className="relative z-20 flex flex-col gap-y-10 text-center items-center justify-center">
            <AnimatedText
              text="Where technology meets excellence."
              className="text-[50px] lg:text-[45px] xl:text-[77px] text-[#006bfb] font-[600] md:w-[60%] xl:w-[60%] 2xl:w-[50%] leading-[50px] lg:leading-[80px]"
            />
            <h2
              className={`banner_subtitle text-[#006bfb] mt-[-35px] font-[300] hidden lg:flex text-[34px] transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
            >
              Empowering businesses through IT solutions.
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute lg:bottom-6 2xl:bottom-20 w-full z-40">
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
      </div>
    </>
  );
};

export default HeroSection;
