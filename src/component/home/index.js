import React from "react";
import Button from '@mui/material/Button';
import HeroSection from "./herosection";
import Services from "./ourservices";
import OurGrowth from "./ourgrowth";
import Partners from "./partners";
import Insights from "./insights";
import Careers from "./careers";
import LoaderHome from "./loading";
import { useEffect, useState } from "react";


const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);
    
  // useEffect(() => {
  //   // Simulate an API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // }, []);

  // if (isLoading) {
  //   return <LoaderHome />;
  // }
  return (
    <div className="">
      <HeroSection/>
      <Services />
      <Partners/>
      <Careers />
      <Insights />
      <OurGrowth />

    </div>
  );
};

export default Home;
