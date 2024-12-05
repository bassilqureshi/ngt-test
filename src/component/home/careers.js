import React, { useState } from "react";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import VectorWithText from "../../svgs/vectorWithText";
import Lottie from "lottie-react";
import Careeranimation from "../../Career.json";
import { Link } from "react-router-dom";

const Careers = () => {

  const contentList = [
    {
      date: "2 days ago",
      title: "Dotnet (.NET) Developer",
      jobType: ["Part Time", "Senior"],
      description: "We are looking for a .NET Developer who possesses a deep understanding of the .NET framework and extensive experience with Shopify APIs. The ideal candidate will be responsible for designing, developing, and maintaining applications that integrate with the Shopify platform, ensuring robust and scalable solutions.",
      buttonLabel: "Apply Now",
      footerTitle: "Dotnet (.NET) Developer"
    },
    {
      date: "1 day ago",
      title: "Techno Functional Trainee",
      jobType: ["Full Time", "Junior"],
      description: "As an Entry-Level techno-functional Trainee, you will be responsible for assisting in the design, development, and maintenance of business models to support business planning and analysis processes. You will work closely with cross-functional teams to understand business requirements and translate them into scalable business solutions.",
      buttonLabel: "Apply Now",
      footerTitle: "Techno Functional Trainee"
    },
    {
      date: "3 days ago",
      title: "Network Engineer",
      jobType: ["Contract", "Mid-level"],
      description: "Responsible for the day-to-day operations, implementation, maintenance, and engineering support of NGTSOL and its clients network infrastructure. Monitors and controls the network infrastructure deployment processes and implements system security to provide stable and secure system platforms. Assists with the implementation of new or additional network technology to augment and improve infrastructure services.",
      buttonLabel: "Apply Now",
      footerTitle: "Network Engineer"
    },
    {
      date: "3 days ago",
      title: "Sr. AWS/DevOps Engineer",
      jobType: ["Contract", "Mid-level"],
      description: "We are seeking a highly skilled AWS/DevOps Engineer to join our dynamic team. The ideal candidate will have extensive experience in AWS system architecture, administration, maintenance tasks, and implementing robust security measures. Professional level certifications in AWS are required, along with a proven track record of at least 5 years of experience specifically in AWS and a total of 10 years in overall IT.",
      buttonLabel: "Apply Now",
      footerTitle: "Sr. AWS/DevOps Engineer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const handleNextContent = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
      setShowContent(true);
    }, 300); // Match this with your transition duration
  };



  const handlePreviousContent = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + contentList.length) % contentList.length);
      setShowContent(true);
    }, 300); // Match this with your transition duration
  };

  const content = contentList[currentIndex];

  return (
    <>
      <div className="grid ">
        <div className="relative  lg:mt-24">
          <div className="lg:w-[365px] w-[330px]  ml-[-90px]  lg:ml-[80px] xl:w-[470px] xl:ml-[120px] 2xl:w-[490px] 2xl:ml-[170px]">
            <Lottie animationData={Careeranimation} loop={true} />

          </div>
          <div className="absolute top-[50%] lg:top-16 lg:flex inset-0">
            <div className=" flex flex-col justify-center items-start pl-6 w-[95%] lg:pl-[50px] xl:pl-[12vw]">

              <h3 className="text-[14px] md:text-[20px] leading-[26px] font-[200]  lg:w-[70%]  lg:ml-[200px] xl:ml-[160px]  text-[#9fa6b6]">
                Success happens when we stay true to our values and goals
              </h3>

            </div>
            <div className="lg:w-[100%] items-center mt-[30%] md:mt-[20%] lg:mt-0  flex pl-6 lg:pl-36">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/jobs"
                data-aos="fade-left"
                data-aos-offset="150"
                className="bg-[#006CFC] w-[90%] md:w-[60%] lg:w-[70%]"
              >
                <div className="career-animate h-[142px] w-[100%] cursor-pointer bg-[#45CEA5]">
                  <p className="text-[20px] md:text-[24px] text-white lg:w-[90%] xl:w-[80%] md:pl-4">
                    Can’t wait to see all the job offers?
                  </p>
                  <p className="text-[14px] text-white pt-2 md:pl-4">Click here to view available jobs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <VectorWithText/> */}


      </div>
      <div className="relative lg:w-[82%]  xl:w-[72%] 2xl:w-[55%] ">

      </div>

      <div className="lg:w-[100%] lg:grid justify-items-center text-center mt-[40%] md:mt-60 lg:mt-4 xl:mt-[-3%] relative pb-10">
        <div className="flex w-[100%] lg:w-[75%] lg:ml-24 xl:ml-0 p-4 lg:p-0  xl:w-[65%] relative">
          <div className="relative ">
            <div
              className={` border-2 text-left   w-[90%] lg:w-[80%] p-3 lg:p-6 rounded-xl border-[#eeeeee] transition-opacity duration-300 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-[500] text-[10px] lg:text-[20px] leading-[25px] text-[#555555] pt-4">{content.date}</p>
              <p className="font-[600] text-[16px] lg:text-[26px] leading-[35px] pt-4">{content.title}</p>
              <div className="flex gap-3 pt-4">
                {content.jobType.map((type, index) => (
                  <div key={index} className="bg-[#F5F5F5] py-[6px] px-[12px] rounded-[5px] text-[12px] font-[700] text-[#555555]">{type}</div>
                ))}
              </div>
              <p className="font-[500] text-[12px] lg:text-[16px] leading-[19px] text-[#555555] w-[80%] pt-7">
                {content.description}
              </p>
              <Divider style={{ marginTop: "30px", width: "70%" }} />
              <Button variant="contained" style={{ backgroundColor: "#006CFC", padding: "5px 8px", borderRadius: "5px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", textTransform: "none", fontFamily: "'Nunito', sans-serif", marginTop: "20px" }}>
                {content.buttonLabel}
              </Button>
            </div>

            <div className="w-[80%] mt-12 gap-3 flex justify-center">
              <img
                src="/Homepage/Career button left.svg"
                alt="Career button left"
                onClick={handlePreviousContent}
                className="cursor-pointer h-[33px] md:h-[64px]"
              />
              <img
                src="/Homepage/Career button right.svg"
                alt="Career button right"
                onClick={handleNextContent}
                className="cursor-pointer h-[33px] md:h-[64px]"
              />
            </div>

            <div className={`text-left md:w-[280px] lg:w-[340px] absolute bottom-14 md:bottom-0 right-0 flex transition-opacity duration-300 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              <a href="/jobs" className="bg-[#006CFC] w-[100%] ">
                <div className="career-animate md:h-[140px] lg:h-[182px] w-[100%] cursor-pointer  bg-[#45CEA5] flex items-center justify-center">
                  <p className="text-[12px] md:text-[18px] lg:text-[24px]">{content.footerTitle}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative -top-[45vh]  bg-slate-400 hidden  xl:flex justify-end items-end  w-full  h-full">
        <div className="absolute -right-32 flex text-[70px]  text-[#ebedee]   font-[700] rotate-90">
          <span className="block">CAREERS</span>
        </div>
      </div> */}
    </>
  );
};

export default Careers;
