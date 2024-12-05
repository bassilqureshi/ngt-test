import React from "react";
import Button from '@mui/material/Button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ImageGrid from "./imagegrid";

const images = [
  { src: '/Homepage/Services/Enterprise Infrastructure Blue.png', hoverSrc: '/Homepage/Services/Enterprise Infrastructure White.png', text: 'Enterprise Infrastructure Services', url: '/enterprise-platform-services' },
  { src: '/Homepage/Services/Information Security Blue.png', hoverSrc: '/Homepage/Services/Information Security White.png', text: 'Information Security', url: '/information-security' },
  { src: '/Homepage/Services/Enterprise Platform Blue.png', hoverSrc: '/Homepage/Services/Enterprise Platform White.png', text: 'Enterprise Platform Services', url: '/enterprise-platform-services' },
  { src: '/Homepage/Services/Enterprise Planning Blue.png', hoverSrc: '/Homepage/Services/Enterprise Planning White.png', text: 'Enterprise Planning', url: '//enterprise-planning' },
  { src: '/Homepage/Services/Staff Augmentation Blue.png', hoverSrc: '/Homepage/Services/Staff Augmentation White.png', text: 'Staff Augmentation Blue', url: '/staff-augmentation' },
  { src: '/Homepage/Services/Technology Blue.png', hoverSrc: '/Homepage/Services/Technology White.png', text: 'Technology Procurement & Licensing', url: '/technology-procurement' },
  { src: '/Homepage/Services/Office Blue.png', hoverSrc: '/Homepage/Services/Office White.png', text: 'Office in a Box', url: '/office-in-a-box' },
  { src: '/Homepage/Services/Project Management Blue.png', hoverSrc: '/Homepage/Services/Project Management White.png', text: 'Project Management', url: '/project-management' },
  // { src: '/Homepage/Services/Training Blue.png',hoverSrc: '/Homepage/Services/Training White.png', text: 'Training',url:'/training' },

];




const OurGrowth = () => {

  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.5,
  });

  const openPdfInNewTab = () => {
    const pdfUrl = '/NGT Business Brochure.pdf';
    window.open(pdfUrl, '_blank');
  };
  return (
    <>


      <div className="lg:w-[100%] lg:grid justify-items-center text-center pt-[40px] lg:pt-[102px] relative">
        <h4 className="font-[700] leading-[43px] lg:leading-[60px] text-[50px] lg:text-[65px]  text-[#006cfc]">
          Our Growth
        </h4>
        <p className=" text-[14px] lg:text-[24px] leading-[30px] font-[500] mt-1  text-[#000000] ">The success we have made throughout the years</p>

        <img src="/Homepage/Growth.png" className="show_on_desktop flex justify-center w-full mt-16" alt="Growth Image" />
        <img src="/Homepage/growth-mobile.png" className="growth_img_mobile show_on_mobile hidden flex justify-center w-full mt-16" alt="Growth Image" />

        <div ref={ref} className="counter_growth_main absolute top-[73%] md:top-[62%] lg:top-[58%]  left-0 w-full flex justify-between px-2 md:px-4 lg:px-6 xl:px-24">
          <div className="counter_item w-[calc(25% - 8px)]  text-center">
            <p className="text-[#FFFFFF] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
              {inView && <CountUp end={40} duration={5} />}
              <span className="text-[#FFFFFF]">+</span>
            </p>
            <p className="text-[#FFFFFF] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[28px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Active Clients</p>
          </div>
          <div className="counter_item w-[calc(25% - 8px)] text-[#222222]  text-center">
            <p className="text-[#FFFFFF] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
              {inView && <CountUp end={270} duration={5} />}
              <span className="text-[#FFFFFF]">+</span>
            </p>
            <p className="text-[#FFFFFF] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[28px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Projects Done</p>
          </div>
          <div className="counter_item w-[calc(25% - 8px)] text-[#222222]  text-center">
            <p className="text-[#FFFFFF] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
              {inView && <CountUp end={60} duration={5} />}
              <span className="text-[#FFFFFF]">+</span>
            </p>
            <p className="text-[#FFFFFF] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[28px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Team Advisers</p>
          </div>
          <div className="counter_item w-[calc(25% - 8px)] text-[#222222]  text-center">
            <p className="text-[#FFFFFF] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
              {inView && <CountUp end={10} duration={5} />}
              <span className="text-[#FFFFFF]">+</span>
            </p>
            <p className="text-[#FFFFFF] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[28px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Glorious Years</p>
          </div>
        </div>
      </div>
      <div className="get_to_know_home lg:w-[100%] lg:grid pt-8 lg:pt-[82px] justify-items-center text-center get_to_know_sec pb-[80px]">
        <h4 className="font-[700] leading-[43px] lg:leading-[60px] text-[50px] lg:text-[65px]  text-[#006cfc]">
          Get to Know Us!
        </h4>
        <p className=" text-[14px] lg:text-[24px] leading-[30px] font-[500] mt-1  text-[#000000] ">Download our e-brochure and get all there is to know about NGTSOL</p>
        <img src="/Homepage/ngt-know-logo.svg" className="zoom-in xl:h-[380px] flex justify-center w-full mt-16" alt="Get to Know Us" />
        {/* <div className="pt-[30px]">

          <p className="text-center font-[700] text-[#006CFC] text-[32px] md:text-[48px] leading-[60px] pt-4  xl:ml-20 ">Get to Know Us! </p>
        </div> */}
        <div className="pt-[60px]">

          <div
            className="ebroucher-career-animate 
             bg-[#006cfc] font-[500] lg:h-[114px] md:h-[94px] h-[57px] w-auto md:w-[450px] xl:w-[550px] rounded-[8px] md:rounded-[16px]  text-[20px] xl:text-[40px]  text-white 
             flex items-center justify-center cursor-pointer "
            onClick={openPdfInNewTab}
          >
            Download Our E-Brochure</div>
        </div>
      </div>
    </>

  );
};

export default OurGrowth;
