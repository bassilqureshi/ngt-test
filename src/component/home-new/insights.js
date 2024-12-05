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

        <div className="block relative justify-center pb-20">
          <div className="insight_right_heading show_on_mobile">
            <div className="lottie_animation">
              <Lottie animationData={Insightsanimation} loop={true} />
              <div className="lottie_text">
                <h3 className="text-[#9fa6b6]">
                  Updates from NGTSOL—where growth and improvement never stop
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 insights_grid_main  lg:grid-cols-2 pl-2 pr-2 lg:pl-[0px] lg:pr-[31%] xl:pl-[0px] xl:pr-[36%] xl:pl-[50px]  ">
            <div className=" ">
              <div className="hidden lg:grid lg:h-[120px]">

              </div>
              <NavLink to="/insights/ngtsol-at-servicenow-knowledge-2024">
                <div className="  ">
                  <div className="flex justify-center relative">
                    <div className="image-container">
                      <img src="/Homepage/Insights 2.png" alt="Insights 1" />
                      <div className="absolute lg:h-[212px] lg:w-[350px] bottom-0 right-0 bg-white p-3 lg:p-8">
                        <div className="flex">
                          <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">May 7, 2024</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[16px] leading:-[19px] lg:leading-[23px] pb-4 pt-2 lg:pt-4"> NGTSOL at ServiceNow Knowledge 2024: Exploring the Future of Business Transformation</p>
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
                      <img src="/Homepage/Insights 1.png" alt="Insights 2" />
                      <div className="absolute lg:h-[212px] lg:w-[350px] bottom-0 right-0 bg-white p-2 lg:p-8">
                        <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">20 Nov, 2023</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[16px] leading:-[19px] lg:leading-[23px] pb-4 pt-2 lg:pt-4">London Tech Meetup: NGTSOL hosted the event, connecting with tech enthusiasts & professionals.</p>
                        <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>

                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* <a href="/insights">
                
              </a> */}
            </div>

            <div className="">

              <NavLink to="/insights">
                <div className="flex justify-center relative">
                  <div className="image-container">
                    <img src="/Homepage/Insights 3.png" alt="Insights 3" />
                    <div className="absolute lg:h-[212px] w-full lg:w-[350px] bottom-0 right-0 bg-white p-2 lg:p-8">
                      <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">Oct 16, 2023</p>
                        <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                      </div>
                      <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[16px] leading:-[19px] lg:leading-[23px] pb-4 pt-2 lg:pt-4">NGTSOL Makes a Strong Impression at GITEX Global 2023</p>
                      <span className="navlink font-[700] text-[12px] lg:text-[16px] leading-[21px]  ">Read More</span>

                    </div>
                  </div>
                </div>
              </NavLink>



              <NavLink to="/insights/ngtsol-joins-visionaries-at-leap-24">
                <div className="mt-6  ">
                  <div className="flex justify-center relative">
                    <div className="image-container">
                      <img src="/Homepage/Insights 4.png" alt="Insights 4" />
                      <div className="absolute lg:h-[212px] lg:w-[350px] bottom-0 right-0 bg-white p-2 lg:p-8">
                        <div className="flex">   <p className="font-[700] text-[12px] lg:text-[14px] text-[#777777]">March 4, 2024</p>
                          <p className="font-[700] text-[14px] text-[#006CFC] pl-5">News</p>
                        </div>
                        <p className="font-[900] text-[14px] lg:text-[15px] xl:text-[16px] leading:-[19px] lg:leading-[23px] pb-4 pt-2 lg:pt-4">NGTSOL Joins Visionaries at LEAP 24: Paving the Way for the Future of Tech</p>
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
                <NavLink to="/insights">
                  <p className=" text-[24px] pl-2 font-[400] leading-[30px] text-[#006CFC] flex  justify-center items-center ">
                    More News
                  </p>
                </NavLink>
              </div>

            </div>
          </div>

          <div className="insight_right_heading show_on_desktop">
            <div className="lottie_animation">
              <Lottie animationData={Insightsanimation} loop={true} />
              <div className="lottie_text">
                <h3 className="text-[#9fa6b6]">
                  Updates from NGTSOL—where growth and improvement never stop
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default insights;
