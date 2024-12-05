import React from "react";
import Lottie from "lottie-react";
import Insightsanimation from "../../Insights&News.json";
import { NavLink } from "react-router-dom";


import 'aos/dist/aos.css';

const insights = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="bg-[#fafafa]">
        <div className="relative pt-12">
          <div className="w-[350px] md:w-[440px] ml-[-80px] md:ml-[-90px]  lg:w-[480px] lg:ml-[75px] xl:w-[620px] xl:ml-[105px]  2xl:w-[620px] 2xl:ml-[190px]">

            <Lottie animationData={Insightsanimation} loop={true} />
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">
            {/* <p className="text-[20px] leading-[26px] font-[200]  lg:w-[70%] pt-8 lg:ml-[200px] xl:ml-[160px] lg:mt-11 xl:mt-14 text-[#9fa6b6]"> */}

            <h3 className="lg:text-[20px] leading-[26px] font-[300] w-[95%] lg:w-[30%] 2xl:w-[20%] pt-24 md:pt-20 md:ml-[20px] lg:ml-[95px] xl:ml-[160px] 2xl:ml-[240px] lg:mt-12 xl:mt-8 2xl:mt-12 text-[#9fa6b6]">
              Updates from NGTSOL—where growth and improvement never stop
            </h3>

            {/* <p className="text-[22px] leading-[26px] font-[200] lg:w-[30%]  ml-[9vw] pt-24 text-[#9fa6b6]">View all</p> */}

          </div>
        </div>
        <div class="flex justify-center pb-20 lg:mt-[-12%]">
          <div className="grid grid-cols-1 gap-6   lg:grid-cols-2 pl-2 pr-2 lg:pl-[22%] lg:pr-[11%] xl:pl-[26%] xl:pr-[13%]  ">
            <div data-aos="fade-up"
              data-aos-offset="150" data-aos-anchor-placement="top-bottom" className=" ">
              <div className="hidden lg:grid lg:h-[310px]">

              </div>
              <NavLink to="/insights/ngtsol-at-servicenow-knowledge-2024">
                <div className="  ">
                  <div className="flex justify-center relative">
                    <div className="image-container">
                      <img src="/Homepage/Insights 2.png" alt="Insights 1" className="lg:h-[368px] xl:h-[418px] 2xl:h-[468px] w-auto flex justify-center image " />
                      <div className="absolute lg:h-[262px] lg:w-[301px] bottom-0 right-0 bg-white p-3 lg:p-8">
                        <div className="flex">
                          <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">May 7, 2024</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[20px] leading:-[19px] lg:leading-[27px] pb-4 pt-2 lg:pt-4"> NGTSOL at ServiceNow Knowledge 2024: Exploring the Future of Business Transformation</p>
                        <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>
                      </div>
                    </div>
                  </div>

                </div>
              </NavLink>
              {/* <a href="/insights">
                
              </a> */}
              <NavLink to="/insights/ngtsol-hosts-london">
                <div className=" mt-6">
                  <div className="flex justify-center relative">
                    <div className="image-container">
                      <img src="/Homepage/Insights 1.png" alt="Insights 2" className="lg:h-[368px] xl:h-[418px] 2xl:h-[468px] w-auto flex justify-center image" />
                      <div className="absolute lg:h-[262px] lg:w-[301px] bottom-0 right-0 bg-white p-2 lg:p-8">
                        <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">20 Nov, 2023</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[20px] leading:-[19px] lg:leading-[27px] pb-4 pt-2 lg:pt-4">London Tech Meetup: NGTSOL hosted the event, connecting with tech enthusiasts & professionals.</p>
                        <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>

                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* <a href="/insights">
                
              </a> */}
            </div>

            <div data-aos="fade-up"
              data-aos-offset="100" data-aos-anchor-placement="top-bottom" className="">

              <NavLink to="/insights">
                <div className="flex justify-center relative">
                  <div className="image-container">
                    <img src="/Homepage/Insights 3.png" alt="Insights 3" className="lg:h-[368px] xl:h-[418px] 2xl:h-[468px] w-auto flex justify-center image " />
                    <div className="absolute lg:h-[262px] w-full lg:w-[301px] bottom-0 right-0 bg-white p-2 lg:p-8">
                      <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">Oct 16, 2023</p>
                        <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                      </div>
                      <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[20px] leading:-[19px] lg:leading-[27px] pb-4 pt-2 lg:pt-4">NGTSOL Makes a Strong Impression at GITEX Global 2023</p>
                      <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>

                    </div>
                  </div>
                </div>
              </NavLink>



              <NavLink to="/insights/ngtsol-joins-visionaries-at-leap-24">
                <div className="mt-6  ">
                  <div className="flex justify-center relative">
                    <div className="image-container">
                      <img src="/Homepage/Insights 4.png" alt="Insights 4" className="lg:h-[368px] xl:h-[418px] 2xl:h-[468px] w-auto flex justify-center image" />
                      <div className="absolute lg:h-[262px] lg:w-[301px] bottom-0 right-0 bg-white p-2 lg:p-8">
                        <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">March 4, 2024</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[20px] leading:-[19px] lg:leading-[27px] pb-4 pt-2 lg:pt-4">NGTSOL Joins Visionaries at LEAP 24: Paving the Way for the Future of Tech</p>
                        <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>

                      </div>
                    </div>
                  </div>

                </div>
              </NavLink>
              <div className="flex  justify-center items-center h-[200px] lg:h-[310px]">
                <img
                  src="/Homepage/More News Icon.svg"
                  alt="More News Icon"
                  className="h-[58px] lg:h-[68px] transition-transform duration-1000 hover:scale-90"
                />
                <a href="/insights">
                  <p className=" text-[24px] pl-2 font-[400] leading-[30px] text-[#006CFC] flex  justify-center items-center ">
                    More News
                  </p>
                </a>
              </div>

            </div>
          </div>

        </div>
        {/* <div className="relative -top-[110vh]  bg-slate-400  hidden xl:flex justify-end items-end  w-full  h-full">
          <div className="absolute -right-32 flex text-[70px]  text-[#ebedee]   font-[700] rotate-90">
            <span className="block">INSIGHTS</span>
          </div>
        </div> */}
      </div>
    </>

  );
};

export default insights;
