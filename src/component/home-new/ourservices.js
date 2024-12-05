
import Button from '@mui/material/Button';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HoverButton from './hoverbutton';
import ImageGrid from './imagegrid';

const images = [
  { src: '/Homepage/Services/Enterprise Infrastructure Blue.png', hoverSrc: '/Homepage/Services/Enterprise Infrastructure White.png', text: 'Enterprise Infrastructure Services', url: '/enterprise-infrastructure-services' },
  { src: '/Homepage/Services/Enterprise Platform Blue.png', hoverSrc: '/Homepage/Services/Enterprise Platform White.png', text: 'Enterprise Platform Services', url: '/enterprise-platform-services' },

  { src: '/Homepage/Services/Information Security Blue.png', hoverSrc: '/Homepage/Services/Information Security White.png', text: 'Information Security', url: '/information-security' },
  { src: '/Homepage/Services/Enterprise Planning Blue.png', hoverSrc: '/Homepage/Services/Enterprise Planning White.png', text: 'Enterprise Planning', url: '/enterprise-planning' },
  { src: '/Homepage/Services/Office Blue.png', hoverSrc: '/Homepage/Services/Office White.png', text: 'Office in a Box', url: '/office-in-a-box' },
  { src: '/Homepage/Services/Project Management Blue.png', hoverSrc: '/Homepage/Services/Project Management White.png', text: 'Project Management', url: '/project-management' },

  { src: '/Homepage/Services/Staff Augmentation Blue.png', hoverSrc: '/Homepage/Services/Staff Augmentation White.png', text: 'Staff Augmentation', url: '/staff-augmentation' },
  { src: '/Homepage/Services/Technology Blue.png', hoverSrc: '/Homepage/Services/Technology White.png', text: 'Technology Procurement', url: '/technology-procurement' },


];


const Services = () => {

  const buttonRef = useRef([]);




  return (
    <>
      <div className='main_services_section_home'>
        <div className="lg:w-[100%] grid justify-items-center text-center mt-10 ">

          <h4 className="tracking-[1px] font-[700] leading-[43px] lg:leading-[60px] text-[48px] lg:text-[65px] mt-[10px] text-[#006cfc]">
            Our Services
          </h4>
          <p className=" text-[14px] lg:text-[24px] leading-[30px] font-[500] mt-1  text-[#000000] ">
            Your Partner in Growth
          </p>
        </div>
        <div className='grid lg:hidden grid-cols-2 pt-8'>
          <div className=' flex text-center items-center flex-col'>
            <img src='/Homepage/Services/Enterprise Infrastructure Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Enterprise Infrastructure Services</p>
          </div>
          <div className=' flex text-center items-center flex-col'>
            <img src='/Homepage/Services/Enterprise Platform Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Enterprise Platform Services</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Information Security Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Information Security</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Enterprise Planning Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Enterprise Planning</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Office Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Office in a Box</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Project Management Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Project Management</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Staff Augmentation Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Staff Augmentation</p>
          </div>
          <div className=' flex text-center items-center flex-col pt-8'>
            <img src='/Homepage/Services/Technology Blue.png' className='h-[94px]' />
            <p className='text-[13px] leading-[13px] px-4 pt-4 text-[#000000]'>Technology Procurement & Licensing</p>
          </div>


        </div>
        <div className="hidden lg:block mt-8">
          <ImageGrid images={images} />
        </div>
      </div>


      {/* <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-x-32">
          {buttonData.map((button, index) => (
            <div key={index} className="p-0">
              <HoverButton image={button.image} text={button.text} />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div>

    
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-[10px] justify-items-center">
          <div ref={buttonRef} className="pt-[46px]">
            <div className="image-swap">
              <img src="/Homepage/Enterprise Infrastructure.svg" alt="Image 1" />
              <img src="/Homepage/Enterprise Whitebg.svg" alt="Image 2" className="opacity-0" />
            </div>
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Enterprise Infrastructure <br></br>
              Services</p>
          </div>
          <div className="pt-[46px]">
            <img src="/Homepage/Informarion Security.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Information
              <br></br>
              Security</p>
          </div>
          <div className="pt-[46px]">
            <img src="/Homepage/Enterprise Platform.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Enterprise Platform <br></br>
              Services</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-[82px] justify-items-center">
          <div className="pt-[46px]">
            <img src="/Homepage/Enterprise Planning.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Enterprise Planning &
              <br></br>
              Performance Management </p>
          </div>
          <div className=" pt-[46px]">
            <img src="/Homepage/Staff Augmentation.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Staff
              <br></br>
              Augmentation</p>
          </div>
          <div className="pt-[46px]">
            <img src="/Homepage/Technology Procurement.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Technology Procurement
              <br></br>
              & Licensing</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  pt-[82px] justify-items-center">
          <div className="pt-[46px]">
            <img src="/Homepage/Office in a box.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Office in a
              <br></br>
              Box</p>
          </div>
          <div className="pt-[46px]">
            <img src="/Homepage/Project Management.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Project
              <br></br>
              Management </p>
          </div>
          <div className="pt-[46px]">
            <img src="/Homepage/Training.svg" className="h-[257px]  flex justify-center w-full " />
            <p className="text-center font-[700] text-[28px] leading-[38px] pt-4">Training<br></br>
              Services</p>
          </div>
        </div>
      </div> */}
    </>







  );
};

export default Services;
