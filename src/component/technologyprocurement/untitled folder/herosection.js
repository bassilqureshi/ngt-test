import React from "react";
import Button from '@mui/material/Button';
import Flow from "../../Flow 1.json";
import Lottie from "lottie-react";
import FlowNew from "../../herosectionshape.json";
import Scroll from "../../scroll.json";


const heroSection = () => {
  return (

    <>

      <div className="relative h-[125vh] flex items-center justify-center bg-gray-800 overflow-hidden">
        



        <img className="absolute inset-0 w-full h-full object-cover" src="/TechnolgyProcurement/TechnolgyProcurementHero.png" alt="Hero Section Image" />
        <div className="relative z-10">
          <div className="flex flex-col gap-x-10 text-center items-center justify-center">
            <h2 className="text-[50px] w-[70%] lg:text-[45px] xl:text-[75px] text-white xl:mt-[-60px] font-[700] ">Technology Procurement
            & Licensing</h2>
           
          </div>
        </div>
  

      </div>
   




    </>






  );
};

export default heroSection;
