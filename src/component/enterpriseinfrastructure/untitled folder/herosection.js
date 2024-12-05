import React from "react";
import Button from '@mui/material/Button';
import Flow from "../../Flow 1.json";
import Lottie from "lottie-react";
import FlowNew from "../../herosectionshape.json";
import Scroll from "../../scroll.json";


const heroSection = () => {
  return (

    <>

      <div className="relative h-screen flex items-center justify-center bg-gray-800 overflow-hidden">

        <img className="absolute inset-0 w-full h-full object-fill" src="/EnterprisePlanning/EnterprisePlanningHero.png" alt="Hero Section Image" />
        <div className="relative z-10">
          <div className="flex flex-col gap-x-10 text-center items-center justify-center mt-[50px]">
            {/* <img className="h-[65vh] mt-28" src="/EnterprisePlanning/AboutImgLogo.svg" alt="logo"/> */}
            <h2 className="text-[50px] lg:text-[45px] xl:text-[75px] lg:px-[20%] text-white font-[700]  ">Enterprise Planning and Performance Management</h2>
            {/* <p className="text-[30px] text-white">Dream big. Push boundaries. We'll secure your journey</p> */}
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>


      </div>





    </>






  );
};

export default heroSection;
