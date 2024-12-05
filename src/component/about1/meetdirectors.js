import React from "react";
import Lottie from "lottie-react";
import MeatTheTeamAnimation from "../../MeetOurBoard.json";
import { useState } from "react";



const MeetDirectors = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (

    < >
      <div id="our-board">
        <div className="relative pt-12">
          <div className="w-[350px] md:w-[420px] ml-[-80px] md:ml-[-90px]  lg:w-[410px] lg:ml-[25px] xl:w-[510px] xl:ml-[80px]  2xl:w-[535px] 2xl:ml-[150px]">

            <Lottie animationData={MeatTheTeamAnimation} loop={true} />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">

            <h3 className="lg:text-[20px] text-[17px]  leading-[20px] lg:leading-[26px]  font-[300] w-[95%] md:w-[50%] lg:w-[40%] 2xl:w-[30%]  md:ml-[20px] lg:ml-[40px] xl:ml-[100px] 2xl:ml-[160px] pt-36 lg:pt-40 text-[#9fa6b6]">
            With a deep commitment to our vision, our Board of Directors provides the leadership and direction essential to our growth and success.      </h3>


          </div>
        </div>




        <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:px-10 xl:px-20  2xl:px-40 mt-14 ">
          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]  2xl:w-[367px] h-auto  lg:mt-32 ">
            <img src="/About/MeetDirectors1.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0  h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[27px] ">Johnathan Reynolds brings over 25 years of leadership experience in the technology sector. As Chairman, he oversees strategic decision-making, guiding the company toward sustainable growth and innovation</p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Johnathan Reynolds</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Chairman of the Board</p>
              </div>
            </div>
          </div>

          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]   2xl:w-[367px] h-auto  lg:mt-16 ">
            <img src="/About/MeetDirectors2.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[27px] ">Jamie Taylor serves as the Chairman of the Audit Committee, leveraging his extensive experience in financial oversight and corporate governance. His keen eye for detail and commitment to transparency ensure that NGTSOL maintains the highest standards of financial integrity. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[900]">Jamie Taylor</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Chairman of Audit Committee</p>
              </div>
            </div>
          </div>


          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]   2xl:w-[367px] h-auto  mt-4 lg:mt-0 ">
            <img src="/About/MeetDirectors3.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[27px] ">As Managing Director and having a strong background in business management and operations, Michael drives continuous improvement across all departments,fostering a culture of excellence and accountability within the organization.</p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Michael Bennett</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Managing director</p>
              </div>
            </div>
          </div>

          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]   2xl:w-[367px] h-auto  lg:mt-40 ">
            <img src="/About/MeetDirectors4.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex lg:p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[17px] lg:leading-[27px] ">Daniel Robinson brings a wealth of experience as an Independent Director, offering an objective perspective on the company’s strategic initiatives. His background in corporate governance and business development allows him to provide valuable insights for NGTSOL. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Daniel Robinson</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Independent Director</p>
              </div>
            </div>
          </div>

          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]   2xl:w-[367px] h-auto  lg:mt-20 ">
            <img src="/About/MeetDirectors5.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[27px] ">Mark Caton brings extensive experience as an Independent Director, offering an objective perspective on the company's strategic initiatives. His background in corporate governance and business development enables him to provide valuable insights for NGTSOL. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Mark Caton</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Independent Director</p>
              </div>
            </div>
          </div>


          <div class="relative  w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px] lg:h-[464px]   2xl:w-[367px] h-auto  mt-4  ">
            <img src="/About/MeetDirectors6.png" alt="Image 1" class=" w-[120px] sm:w-[285px] md:w-[297px] lg:w-[307px]  2xl:w-[367px] h-auto   transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[12px] md:text-[22px] leading-[27px] ">Laura Gomez leads NGTSOL’s Human Resources department, focusing on talent management,employee engagement, and organizational development. With deep understanding of HR best practices, Laura is committed to creating a workplace environment.</p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[13px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Laura Gomez</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Director of Human Resources</p>
              </div>
            </div>
          </div>


        </div>
        <div class="flex justify-center gap-x-16 mt-14 bg-red-200">
         
        </div>


      </div>




    </>



  );
};

export default MeetDirectors;
