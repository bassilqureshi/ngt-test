import React from "react";
import Lottie from "lottie-react";
import CEOMessageAnimation from "../../CEOMsgAbout.json";

const CEOMessage = () => {
  return (
   
    <>

    <div  id = "ceo-message">
      <div className="relative ">
        <div className="lottie_animation_main_sec w-[350px] md:w-[380px] ml-[-80px] md:ml-[-90px]  lg:w-[380px] lg:ml-[35%] xl:w-[380px] xl:ml-[4%]  2xl:w-[420px] 2xl:ml-[10%]">

          <Lottie animationData={CEOMessageAnimation} loop={true} />
        </div>
        <div className="lottie_animation_main_heading absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">

          <h3 className="lg:text-[20px] leading-[26px] font-[300] w-[95%] lg:w-[40%] 2xl:w-[30%]  md:ml-[20px] lg:ml-[39%] xl:ml-[22px] 2xl:ml-[9%] pt-24 text-[#9fa6b6]">
            Welcome to NGTSOL
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-[-70px] px-4 lg:px-14 ">
        <div className="flex justify-end pr-8 ceo_img_sec">
          <img src="/About/CEOPicture.png" alt="Image 1" class="xl:w-[522px] xl:h-[650px] lg:w-[502px] lg:h-[650px]" />
        </div>
        <div className="ceo_message_content flex flex-col lg:px-20 xl:px-20 2xl:px-20  h-full justify-end pb-20">
          <h2 className="text-[19px] lg:text-[42px] font-[700] leading-[24px] lg:leading-[50px] mt-6 lg:mt-3">"Our commitment to excellence and vision for transformation drive everything we do."</h2>
          <p className="lg:text-[16px] font-[500] leading-[13px] lg:leading-[27px] text-[#9fa6b6] mt-10">From our early beginnings to becoming industry leaders, we have always sought to redefine what's possible in managed IT services. Our dedication to pushing the boundaries of technology and innovation ensures that our clients are empowered to excel in a rapidly evolving digital world.          </p>
          <p className="lg:text-[16px] font-[500] leading-[13px] lg:leading-[27px] text-[#9fa6b6] mt-8">We aim not just to meet, but to exceed expectations, delivering lasting value through cutting-edge solutions and strategic insight. Embracing every challenge as an opportunity for growth, we continuously evolve to drive progress and support your success.          </p>
          <p className="lg:text-[16px] font-[500] leading-[13px] lg:leading-[27px] text-[#9fa6b6] mt-8">As we look to the future, we are excited about the possibilities ahead and remain steadfast in our mission to equip businesses with the tools and strategies they need to thrive. Thank you for being an integral part of our journey. Together, we will continue to shape the future of technology and achieve remarkable milestones.          </p>
          <p className="lg:text-[16px] font-[500] leading-[13px] lg:leading-[27px] text-[#9fa6b6] ">Warm regards</p>

          <h2 className="text-[21px] leading-[30px] font-[900] mt-8">Henry Williamson</h2>
          <h3 className="text-[14px] font-[500] leading-[25px] text-[#888888] mt-1">CEO</h3>


        </div>
      </div>

    </div>
    

    </>



  );
};

export default CEOMessage;