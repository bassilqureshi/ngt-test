import React from "react";
import Lottie from "lottie-react";
import NGTSOLTimelineAnimation from "../../NGTTimelineAbout.json";
import TimelineDrag from "./timelinedrag";


const NGTSOLTimeline = () => {


  return (

    <>
      <div id="our-responsibility" className="lg:flex flex-col hidden">
        <div className="relative pt-12 mb-20">
          <div className="lottie_animation_main_sec w-[350px] md:w-[420px] ml-[-80px] md:ml-[-90px]  lg:w-[460px] lg:ml-[75px] xl:w-[400px] xl:ml-[85px]  2xl:w-[610px] 2xl:ml-[140px]">
            <Lottie animationData={NGTSOLTimelineAnimation} loop={true} />
          </div>
          <div className="lottie_animation_main_heading absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">
            <h3 className="text-[17px]  leading-[20px] lg:leading-[26px] font-[300] md:ml-[20px] lg:ml-[90px] xl:ml-[80px] 2xl:ml-[190px] pt-20 lg:pt-16 text-[#9fa6b6]">
              We take pride in our ongoing, consistent growth annually.
            </h3>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="circle fade-down">
            <img src="/About/TimelinePicture1.png" alt="2016" />
          </div>
          <div className="year fade-up">2016</div>
          <div className="stats fade-up">
            <p><strong>Active Clients</strong> 35</p>
            <p><strong>Projects Done</strong> 80</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle fade-down">
            <img src="/About/TimelinePicture3.png" alt="2018" />
          </div>
          <div className="year fade-up">2018</div>
          <div className="stats fade-up">
            <p><strong>Active Clients</strong> 42</p>
            <p><strong>Projects Done</strong> 92</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle fade-down">
            <img src="/About/TimelinePicture5.png" alt="2020" />
          </div>
          <div className="year fade-up">2020</div>
          <div className="stats fade-up">
            <p><strong>Active Clients</strong> 50</p>
            <p><strong>Projects Done</strong> 105</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle fade-down">
            <img src="/About/TimelinePicture4.png" alt="2022" />
          </div>
          <div className="year fade-up">2022</div>
          <div className="stats fade-up">
            <p><strong>Active Clients</strong> 57</p>
            <p><strong>Projects Done</strong> 118</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle fade-down">
            <img src="/About/TimelinePicture7.png" alt="2024" />
          </div>
          <div className="year fade-up">2024</div>
          <div className="stats fade-up">
            <p><strong>Active Clients</strong> 70</p>
            <p><strong>Projects Done</strong> 140</p>
          </div>
        </div>
      </div>




    </>



  );
};

export default NGTSOLTimeline;
