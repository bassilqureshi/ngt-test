import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';



const BelowHero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>

      <div id='ngtsol-staff-augmentation' className='flex flex-col items-center justify-center'>
        <h3 data-aos="fade-up"
          data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[48px] w-[70%] 2xl:w-[77%] leading-[58px] text-center mt-10">
          Bridge the talent gap with NGTSOL Staff Augmentation, delivering specialized skills to drive your projects to success.
        </h3>




      </div>
      <div className=" flex mt-72  items-start justify-start w-[100%]">
        <div className=" mt-24 w-[90%]  h-full relative">
          <img src="/StaffAugmentation/StaffAugmentationImage.png" className=" w-[90%] mr-auto" />


          <div className="absolute right-10 top-0 bottom-0 flex flex-col justify-between   w-[40%]">

            <div data-aos="fade-right"
              data-aos-offset="150"
              className="bg-[#F3F3F3] text-left lg:ml-10 2xl:ml-14 p-6 lg:p-14 h-[500px] lg:h-[660px] xl:h-[580px] 2xl:h-[500px] md:h-[700px] lg:w-[476px] xl:w-[546px] 2xl:w-[616px] leading-[30px] flex flex-col justify-between mt-[-70px] lg:mt-[-370px] xl:mt-[-300px] 2xl:mt-[-240px] shadow-[-6px_0_10px_rgba(0,0,0,0.1)] rounded-bl-[100px] rounded-tl-[100px] rounded-br-[100px]">

              <p data-aos="fade-up"
                data-aos-offset="300"
                className=" mt-4 text-[16px] md:text-[28px]  w-[100%]  leading-[20px] md:leading-[30px] lg:leading-[40px] text-[#000000]">
                At NGTSOL, we understand that finding the right talent for your IT projects can be challenging and time-consuming. Our Staff Augmentation services are designed to seamlessly integrate highly skilled professionals into your existing team, ensuring that you have the essential expertise, exactly when you need it.
              </p>
            </div>


          </div>

        </div>
      </div>
      <div className='grid-cols-1 lg:grid-cols-2 gap-x-10 grid mt-40  px-20'>

        <div className='pr-20'>
          <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[50px] 2xl:text-[60px] font-[700] leading-[70px] mt-6 lg:mt-0'>

            Tailored Expertise for Your Needs
          </h1>
          <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>

            Our approach to staff augmentation is personalized and flexible. Whether you need specialists in Managed IT Services, network security, project management, or any other IT domain, we have a vast pool of qualified professionals ready to join your team. We meticulously match our resources to your project requirements, ensuring that each professional has the precise skills and experience needed to drive your projects to success.
          </h2>
        </div>
        <div className='lg:mt-0 mt-10  flex lg:justify-end'>
          <img className='h-[90%] w-[90%]' src='/StaffAugmentation/StaffAugmentation1.png' />
        </div>
      </div>
      <div className='grid-cols-1 lg:grid-cols-2 gap-x-10 grid mt-28  px-20'>
        <div className='lg:mt-0 mt-10 flex lg:justify-start'>
          <img className='h-[90%] w-[90%]' src='/StaffAugmentation/StaffAugmentation2.png' />
        </div>
        <div className=''>
        <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[50px] 2xl:text-[60px] font-[700] leading-[70px] mt-6 lg:mt-0'>
        Seamless Integration and Collaboration
          </h1>
          <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
            At NGTSOL, we prioritize smooth integration of our professionals into your existing workflows. Our experts are adept at quickly understanding your business processes and aligning with your organizational culture. This ensures minimal disruption and maximum productivity from day one. With our staff augmentation services, you gain immediate access to top-tier talent without the long lead times typically associated with traditional hiring.
          </h2>
        </div>

      </div>
      <div className='grid-cols-1 lg:grid-cols-2 gap-x-10 grid mt-28  px-20'>

        <div className='pr-20'>
        <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[50px] 2xl:text-[60px] font-[700] leading-[70px] mt-6 lg:mt-0'>
        Scalable Solutions for Dynamic Needs
          </h1>
          <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
            Our staff augmentation services are designed to be scalable, allowing you to adjust the size and composition of your team as your project demands evolve.
            Whether you need short-term support for a specific project or long-term augmentation to bolster your in-house capabilities, NGTSOL provides flexible solutions that are contingent to your business. This adaptability ensures that you can meet project deadlines, handle peak workloads, and tackle complex IT challenges with ease
          </h2>
        </div>
        <div className='lg:mt-0 mt-10  flex lg:justify-end'>
          <img className='h-[90%] w-[90%]' src='/StaffAugmentation/StaffAugmentation3.png' />
        </div>
      </div>



    </>

  )
}

export default BelowHero