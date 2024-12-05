import React from 'react'

const picturesanimation = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  justify-items-center   mt-32 px-[10%]">

        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0"
          class="relative p-6 mt-20">
          <h2 className='text-[#006CFC] text-[33px] leading-[37px] font-[700] text-center'>
            NGTSOL<br /> ITIL 24/7 Service Desk
          </h2>
          <img className='mt-20' src='/Officeinabox/Officeinabox1.png' />
        </div>

        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"  
          class="flex flex-col justify-center items-center p-6">
          <h2 className='text-[#006CFC] text-[33px] leading-[37px] font-[700] text-center'>
            NGTSOL<br /> Field Service Engineers
          </h2>
          <img className='' src='/Officeinabox/Officeinabox2.png' />
          <img className='h-[97px] w-[57px]' src='/Officeinabox/Escalation.png' />
          <img className='' src='/Officeinabox/Officeinabox4.png' />
        </div>

        <div 
          class="relative p-6 mt-10">
          <img  data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500"  className='mt-20' src='/Officeinabox/Officeinabox3.png' />
        </div>


      </div>
      <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  justify-items-center  px-[10%]  ">

        <div   class="relative p-6 ">
          <img data-aos="fade-up"
          data-aos-delay="1500" className='h-[80vh] mt-[-10%] ml-[15%]' src='/Officeinabox/LongArrow.png' />
          <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200" className=' ml-[-70px] mt-10' src='/Officeinabox/RemoteUser.png' />
        </div>

        <div   class="flex flex-col  items-center p-6 ">
          <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="700" className='' src='/Officeinabox/ServiceRequest.png' />
          <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500" className='mt-8' src='/Officeinabox/Authentication.png' />

        </div>

        <div  data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500" class="relative p-6 mt-[-10%] ml-[-120px]  ">
          <img className='' src='/Officeinabox/IPSEC.png' />
          <img className='' src='/Officeinabox/DoubleArrow.png' />
          <img className='ml-24' src='/Officeinabox/ShippingAndDelievery.png' />
          <img className='mt-[30vh]' src='/Officeinabox/MicrosoftTeams.png' />
          </div>


      </div>
      <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center mt-20  mx-[10%] ">

        <div class="relative p-6  w-full ">
          <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="0" className='' src='/Officeinabox/DefenderATP.png' />
          <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400" className='mt-20 ml-[-80px]' src='/Officeinabox/MultiTenant.png' />
        </div>

        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800" class="flex flex-col  items-center  p-6 ">
          <img className='pt-36' src='/Officeinabox/IntegrateArrow.png' />

        </div>

        <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500" class="relative p-6 ">
          <img className='' src='/Officeinabox/ImplementationConfiguration.png' />
        </div>


      </div>


    </div>

  )
}

export default picturesanimation