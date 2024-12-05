import React from "react";
import Lottie from "lottie-react";
import WhoWeAreAniomation from "../../whoweareanimation.json";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AOS from 'aos';
import $ from 'jquery';
import { interpolate } from "flubber";
import { gsap } from "gsap";

const WhoWeAre = () => {

  useEffect(() => {
    // Initialize AOS after the component mounts
    AOS.init({
      // Your AOS options, e.g., offset, duration, etc.


    });

    // Refresh AOS on scroll to ensure animations trigger correctly
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    const morphingLetter = $(".morphing-img");

    morphingLetter.each(function () {
      const $this = $(this);
      const normalPath = $this.find("svg .main-letter").attr("d");
      const activePath = $this.attr("data-morphpath");

      const interpolator = interpolate(normalPath, activePath);

      gsap.to($this.find("svg .main-letter"), {
        duration: 2,
        attr: { d: interpolator(1) },
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      });
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseMove = (e) => {
    if (isHovered) {
      const { clientX, clientY } = e;
      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;
      setPosition({ x: clientX - windowCenterX, y: clientY - windowCenterY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  

  return (

    <>

      <div id="who-we-are">
        <div className="flex flex-col items-center  ">
          <h3 data-aos="fade-up"
            data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[14px] md:text-[28px] lg:text-[48px] w-[90%] lg:w-[77%] leading-[17px] md:leading-[30px] lg:leading-[58px] text-center mt-[-60px]">
            NGTSOL provides managed IT services to keep your business ahead. We harness technology to unlock potential, transform challenges, and drive growth, ensuring your tech evolves with your goals.
          </h3>
          <div className=" pt-28   w-full  flex justify-end">
            <div className="w-[1350px] md:w-[650px]   flex justify-end">
              {/* <img className="xl:w-[1570px]  2xl:w-[1190px]  xl:h-[620px] 2xl:h-[670px] " src="/About/WhoWeAreGif.gif" alt="Center GIF" /> */}
              <div className="image_wrapper morphing-img hide-mob js-animated" data-morphpath="M503.35,441.778 c245.134-57.651,156.38-488.477-252-385c-304.931,77.264-293.9,575.217-63,603C437.912,689.805,301.148,489.333,503.35,441.778z">
                <div className="image_clip">
                  <img  src="/About/Whoweareanimation.jpg"  alt="" />
                </div>
                <svg viewBox="0 0 667.699 702.557">
                  <defs>
                    <clipPath id="letter-clip">
                      <path className="letter main-letter" fill="#006CFF" stroke="none"
                        d="M515.016,464.746 c245.133-57.651,141.312-531.97-267.068-428.493c-304.931,77.264-281.577,613.863-50.677,641.646 C446.834,707.926,312.814,512.301,515.016,464.746z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <Lottie animationData={WhoWeAreAniomation} loop={true} /> */}
            </div>
          </div>

          <div className=" flex mt-[-150px] md:mt-[-180px] lg:mt-[-560px]  items-end justify-end  w-[100%]">
            <div className=" mt-24 w-[90%]  h-full relative">
              <img src="/About/WhoWeAreIImage.png" className=" w-[90%] ml-auto" />


              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between   w-[40%]">

                <div data-aos="fade-right"
                  data-aos-offset="150"
                  className="bg-[#F3F3F3] lg:ml-[-40px] xl:ml-[-20px] 2xl:ml-14 p-6 lg:p-14 h-[500px] lg:h-[460px] xl:h-[410px] 2xl:h-[360px] md:h-[200px] lg:w-[366px] xl:w-[446px] 2xl:w-[556px] flex flex-col justify-between mt-[-70px] lg:mt-[-370px] xl:mt-[-350px] 2xl:mt-[-280px] shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                  <p data-aos="fade-up"
                    data-aos-offset="300"
                    className="text-[16px] md:text-[26px] lg:text-[40px] xl:text-[45px] w-[100%] font-[600] leading-[20px] md:leading-[30px] lg:leading-[50px] text-[#2c2c2c]">
                    We champion a culture of exceptional standards and visionary thinking.
                  </p>
                </div>

                <div data-aos="fade-right"
                  data-aos-offset="150" className="bg-[#006CFC]   w-[131px] h-[150px] md:w-[261px] md:h-[250px] lg:h-[469px] 2xl:h-[569px] lg:w-[480px] 2xl:w-[470px] flex flex-col p-4 md:p-6 lg:p-14 md:ml-[200px] lg:ml-[400px] mt-8 md:mt-[150px] lg:mb-[-210px] 2xl:mb-[-160px] justify-between  opacity-35">
                  <p data-aos="fade-up"
                    data-aos-offset="300" className="text-[12px] md:text-[24px] lg:text-[45px] text-[#FFFFFF] font-[700] w-[95%] leading-[14px] md:leading-[28px] lg:leading-[50px]">
                    We leverage technology to deliver tailored services to our clients, guided by three Essential Values.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <img src="/About/IntegrityLine.svg" className="lg:flex hidden 2xl:mt-[290px] mt-10  lg:mt-[370px] w-[62%] pl-4 " />
          <div className="grid lg:grid-cols-3  lg:w-[68%] pl-16 mt-32 md:mt-32 lg:mt-16 ">

            <div data-aos="fade-up"
              data-aos-offset="50" className=" mt-9 lg:mt-0">
              <h2 className="text-[45px] font-[700] leading-[60px] text-[#000000]">Integrity</h2>
              <p className="text-[#9fa6b6] leading-[31px] text-[21px] w-[80%] lg:w-[65%] mt-8">We stand for<span className="text-[#7d54d2]">  reliability, honesty, and transparency</span> in everything we do.
              </p>
            </div>
            <div data-aos="fade-up"
              data-aos-offset="250" className="mt-9 lg:mt-0">
              <h2 className="text-[45px] font-[700] leading-[60px] text-[#000000]">Innovation</h2>
              <p className="text-[#9fa6b6] leading-[31px] text-[21px] w-[80%] lg:w-[65%] mt-8">We drive progress through<span className="text-[#7d54d2]"> strategic thinking, experimentation, and fearless decision-making</span></p>

            </div>
            <div data-aos="fade-up"
              data-aos-offset="350" className="mt-9 lg:mt-0">
              <h2 className="text-[45px] font-[700] leading-[60px] text-[#000000]">Dedication</h2>
              <p className="text-[#9fa6b6] leading-[31px] text-[21px] w-[80%] lg:w-[65%] mt-8">We are committed to<span className="text-[#7d54d2]"> achieving excellence with unwavering focus</span> and precision.</p>

            </div>
          </div>
          <div className="relative grid grid-cols-2 px-4 lg:ml-20  2xl:ml-10 gap-x-3 lg:gap-x-6 mt-20 lg:mt-52 items-center justify-center">
            <div className="relative col-span-2 flex justify-center items-center">
              <Box
                data-aos="zoom-in"
                data-aos-offset="50"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className=" absolute inset-0 top-[30vh] md:top-[55vh] lg:top-[80vh] 2xl:top-[65vh] flex justify-center items-center"
              >
                <img
                  src="/About/AboutImgLogo.svg"
                  className="w-[150px] md:w-[300px] lg:w-[550px] z-10 attract"
                  style={{
                    transform: `translate(${position.x * 0.037}px, ${position.y * 0.037}px)`,
                    transition: 'transform 0.5s ease',
                  }}
                  alt="Center Image"
                />
              </Box>
            </div>
            <div className="flex justify-center">
              <img src="/About/Image 1.png" className="w-[596px]" />
            </div>
            <div className="flex flex-col">
              <img src="/About/Image 2.png" className="mt-12 w-[501px]" />
              <img src="/About/Image 3.png" className="mt-3 lg:mt-4 w-[453px]" />
            </div>
          </div>

        </div>
      </div>

    </>


  );
};

export default WhoWeAre;


