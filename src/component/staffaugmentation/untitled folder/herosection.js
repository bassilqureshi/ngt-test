import React from "react";



const heroSection = () => {
  return (

    <>

      <div className="relative h-[125vh] flex items-center justify-center bg-gray-800 overflow-hidden">
        



        <img className="absolute inset-0 w-full h-full object-cover" src="/StaffAugmentation/StaffAugmentationHero.png" alt="Hero Section Image" />
        <div className="relative z-10">
          <div className="flex flex-col gap-x-10 text-center items-center justify-center mt-[-100px]">
            <h2 className="text-[50px] lg:text-[45px] xl:text-[75px] text-white font-[700] uppercase ">Staff Augmentation</h2>
          </div>
        </div>
   
  

      </div>
   




    </>






  );
};

export default heroSection;