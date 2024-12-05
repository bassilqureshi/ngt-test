import React from "react";
import HeroSection from "./herosection";
import WhoWeAre from "./whoweare";
import NGTSOLTimeline from "./ngtsoltimeline";
import MeatTheTeam from "./meettheteam";
import CEOMessage from "./ceomessage";
import SideBar from "./sidebar";
import MeetDirectors from "./meetdirectors";
import { useEffect, useState } from "react";
import LoaderAbout from "./loaderabout";




const About = () => {
  // const [isLoading, setIsLoading] = useState(true);
    
  // useEffect(() => {
  //   // Simulate an API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // }, []);

  // if (isLoading) {
  //   return <LoaderAbout />;
  // }

  return (
    <div>
   
     <HeroSection/>
     <SideBar/>
     <WhoWeAre/>
     <NGTSOLTimeline/>

     <MeetDirectors/>
     <MeatTheTeam/>
  
     <CEOMessage/>
     
    </div>
  );
};

export default About;
