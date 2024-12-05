import React from "react";
import Lottie from "lottie-react";
import NGTSOLTimelineAnimation from "../../NGTTimelineAbout.json";
import TimelineDrag from "./timelinedrag";


const NGTSOLTimeline = () => {


  return (

    <>
      <div id="our-responsibility" className="lg:flex flex-col hidden">
        <div className="relative pt-12">
          <div className="w-[350px] md:w-[420px] ml-[-80px] md:ml-[-90px]  lg:w-[460px] lg:ml-[75px] xl:w-[550px] xl:ml-[85px]  2xl:w-[610px] 2xl:ml-[140px]">

            <Lottie animationData={NGTSOLTimelineAnimation} loop={true} />
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">

            <h3 data-aos="fade-right"
              data-aos-offset="100" className="text-[17px]  leading-[20px] lg:leading-[26px] font-[300] md:ml-[20px] lg:ml-[90px] xl:ml-[120px] 2xl:ml-[190px] pt-20 lg:pt-16 text-[#9fa6b6]">
              We take pride in our ongoing, consistent growth annually.
            </h3>


          </div>
        </div>
        <TimelineDrag />
        <div className="relative text-center  mt-8">
          <h1 className="text-[71px] md:text-[18vw] lg:text-[18vw] font-[500]  text-[#f2f2f2] ">The Vision</h1>
          <h3  data-aos="fade-right"
              data-aos-offset="100" className="absolute inset-0 flex items-center justify-center font-[600] text-[#7245ce] mt-6 lg:mt-10 text-[11px] md:text-[20px] lg:text-[40px] w-[70%] mx-auto">
            Building a digital future where technology empowers growth, innovation, and enduring success.

          </h3>
        </div>
      </div>


    </>



  );
};

export default NGTSOLTimeline;
