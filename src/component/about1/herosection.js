import React, { useEffect, useState } from 'react';


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
                animationDelay: `${2 + (index + charIndex) * 0.1}s`, // Adding 4 seconds delay
              }}
            >
              {char}
            </span>
          ))}
          {index < animatedText.length - 1 && <span>&nbsp;</span>} {/* Add space between words */}
        </span>
      ))}
    </div>
  );
};

const HeroSection = () => {


  const [showText, setShowText] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4700); // 3.5 seconds delay

    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    // Update timestamp to force GIF reload
    setTimestamp(Date.now());
  }, []);
  const gifUrl = `/About/HeroSectionGif.gif?${timestamp}`

  return (
    <>

      <div className={`relative h-[100vh] lg:h-[100vh] flex items-center z-30 justify-center bg-[#7245CE] overflow-hidden`}>
        <img
          className="absolute inset-0 w-full h-full object-fill"
          src="/About/Abouthero.png"
          alt="Abouthero"

        />

        <div className="relative w-full xl:mt-[-30px] 2xl:mt-[-100px]">
          <div className="absolute inset-0 hidden lg:flex  items-center justify-center z-10">
            <img className="xl:w-[970px] hidden md:flex 2xl:w-[1570px] xl:h-[600px] 2xl:h-[910px] float-animation" src={gifUrl} alt="Center GIF" />
          </div>
          <div className="relative  z-20 flex flex-col gap-y-10  text-center items-center justify-center">
            <AnimatedText
              text="Where technology meets excellence."
              className=" text-[50px] 
    lg:text-[45px] 
    xl:text-[77px] 
    text-[#5930ac] 
    font-[600] 
    md:w-[60%] 
    xl:w-[60%] 
    2xl:w-[50%] 
    leading-[50px] 
    lg:leading-[80px]"
            />
            <h2
              className={`text-[#4f289d] mt-[-35px]  font-[300] hidden lg:flex text-[34px] transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'
                }`}
            >
              Empowering businesses through IT solutions.
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute lg:bottom-6 2xl:bottom-20 w-ful z-40  ">
        <div className="hidden lg:flex justify-between items-center   z-20">
          <div className="w-[90%] lg:pl-[40px]  xl:pl-[60px]" style={{ display: 'flex', alignItems: 'center' }}>
            <p className="text-[#000000]   w-[160px]">Follow NGTSOL </p>
            <img src="/About/Horizontal Divider.svg" alt="Underline Hero" className="h-[3px] lg:mx-3 xl:mx-4" />
            <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
              <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px] mr-4" />
            </a>
            <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
              <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px] mr-4" />
            </a>
            <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
              <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px] mr-5" />
            </a>
            <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
              <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px] mr-5" />
            </a>
            <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
              <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
