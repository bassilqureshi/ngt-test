import React from "react";
import Lottie from "lottie-react";
import MeatTheTeamAnimation from "../../MeetOurTeamAbout.json";
import { useState, useEffect, useRef } from "react";



const MeatTheTeam = () => {
  return (

    < >
      <div className="meet_team">
        <div className="relative pt-0">
          <div className="lottie_animation_main_sec w-[350px] md:w-[420px] ml-[-80px] md:ml-[-90px]  lg:w-[410px] lg:ml-[25px] xl:w-[350px] xl:ml-[80px]  2xl:w-[350px] 2xl:ml-[110px]">

            <Lottie animationData={MeatTheTeamAnimation} loop={true} />
          </div>
          <div className="lottie_animation_main_heading absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">

            <h3 className="pt-new-100 lg:text-[20px] text-[17px]  leading-[20px] lg:leading-[26px]  font-[300] w-[95%] md:w-[50%] lg:w-[40%] 2xl:w-[30%]  md:ml-[20px] lg:ml-[40px] xl:ml-[40px] 2xl:ml-[70px] pt-20 mt-5 lg:pt-20 text-[#9fa6b6]">
            We are a team of passionate experts, united by a shared vision of success. With a focus on excellence and collaboration, we work together to deliver results that consistently surpass expectations.      </h3>


          </div>
        </div>




        <div class="grid grid-cols-1 lg:grid-cols-4 justify-items-center lg:px-10 xl:px-20  2xl:px-40 mt-5 ">
          <div class="team_item fade-up relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[277px] lg:h-[350px]  2xl:w-[297px] 2xl:h-[375px] h-auto">
            <img src="/About/Meet1.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[100%]  h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="team_item_content absolute top-0 left-0  h-full w-full flex p-8 padd_board bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[15px] leading-[27px] ">As CEO of NGTSol, Henry Williamson drives the company's strategic vision and growth. With extensive experience in IT management, he leads with a focus on innovation, excellence, and team empowerment, ensuring NGTSol remains a leader in managed IT services.</p>
              <div class="team_item_footer absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[65px] w-[234px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[15px] font-[700]">Henry Williamson</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Chief Executive Officer (CEO)</p>
              </div>
            </div>
          </div>

          <div class="team_item fade-up relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[277px] lg:h-[350px]   2xl:w-[297px] 2xl:h-[375px] h-auto">
            <img src="/About/Meet2.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[100%]  h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="team_item_content absolute top-0 left-0 h-full w-full flex p-8 padd_board bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[15px] leading-[27px] ">Jamie Taylor serves as the Chairman of the Audit Committee, leveraging his extensive experience in financial oversight and corporate governance. His keen eye for detail and commitment to transparency ensure that NGTSOL maintains the highest standards of financial integrity. </p>
              <div class="team_item_footer absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[65px] w-[234px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[15px] font-[900]">Jamie Taylor</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Chairman of Audit Committee</p>
              </div>
            </div>
          </div>


          <div class="team_item fade-up relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[277px] lg:h-[350px]   2xl:w-[297px] 2xl:h-[375px] h-auto">
            <img src="/About/Meet3.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[100%]  h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="team_item_content absolute top-0 left-0 h-full w-full flex p-8 padd_board bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[15px] leading-[27px] ">As Managing Director and having a strong background in business management and operations, Michael drives continuous improvement across all departments,fostering a culture of excellence and accountability within the organization.</p>
              <div class="team_item_footer absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[65px] w-[234px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[15px] font-[700]">Michael Bennett</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Managing director</p>
              </div>
            </div>
          </div>

          <div class="team_item fade-up relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[277px] lg:h-[350px]   2xl:w-[297px] 2xl:h-[375px] h-auto">
            <img src="/About/Meet4.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[100%]  h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="team_item_content absolute top-0 left-0 h-full w-full flex lg:p-4 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[15px] leading-[17px] lg:leading-[27px] ">Daniel Robinson brings a wealth of experience as an Independent Director, offering an objective perspective on the company’s strategic initiatives. His background in corporate governance and business development allows him to provide valuable insights for NGTSOL. </p>
              <div class="team_item_footer absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[65px] w-[234px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[15px] font-[700]">Daniel Robinson</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Independent Director</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-x-16 mt-5 bg-red-200"></div>
      </div>

    </>
  );
};

export default MeatTheTeam;
