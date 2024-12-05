import React from "react";
import Lottie from "lottie-react";
import MeatTheTeamAnimation from "../../MeetOurTeamAbout.json";
import { useState, useEffect, useRef } from "react";



const MeatTheTeam = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startScroll, setStartScroll] = useState(0);
  const [endScroll, setEndScroll] = useState(0);
  const [lastMargin, setLastMargin] = useState({ margin1: 100, margin2: 150, margin3: 200 });

  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const divTop = divRef.current.offsetTop;
      const divHeight = divRef.current.offsetHeight;
      const divBottom = divTop + divHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      setScrollPosition(scrollY);

      if (scrollY >= divTop && scrollY <= divBottom) {
        setStartScroll(divTop);
        setEndScroll(divBottom);

        // Update lastMargin as the scroll moves within the div
        setLastMargin({
          margin1: calculateMargin(100, 0.1, 200, scrollY, divTop),
          margin2: calculateMargin(150, 0.2, 300, scrollY, divTop),
          margin3: calculateMargin(200, 0.3, 400, scrollY, divTop),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateMargin = (initialMargin, speedFactor, maxMargin, scrollY, divTop) => {
    const relativeScroll = scrollY - divTop;
    const calculatedMargin = initialMargin + relativeScroll * speedFactor;
    return Math.min(calculatedMargin, maxMargin);
  };
  return (

    < >
      <div id="team">
        <div className="relative pt-12">
          <div className="w-[350px] md:w-[420px] ml-[-80px] md:ml-[-90px]  lg:w-[410px] lg:ml-[25px] xl:w-[510px] xl:ml-[80px]  2xl:w-[520px] 2xl:ml-[160px]">

            <Lottie animationData={MeatTheTeamAnimation} loop={true} />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="absolute inset-0 flex flex-col justify-center items-start pl-5 lg:pl-32">

            <h3 className="lg:text-[20px] leading-[26px] font-[300] w-[95%] md:w-[50%] lg:w-[60%] 2xl:w-[30%]  md:ml-[20px] lg:ml-[40px] xl:ml-[130px] 2xl:ml-[170px] pt-48 text-[#9fa6b6]">
              We are a team of passionate experts, united by a shared vision of success. With a focus on excellence and collaboration, we work together to deliver results that consistently surpass expectations.  </h3>


          </div>
        </div>



        <div class="flex justify-center lg:gap-x-8 2xl:gap-x-16 mt-14">
          <div class="relative h-[469px] mt-28  lg:w-[353px]  2xl:w-[363px]">
            <img src="/About/Meet1.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">As CEO of NGTSol, Henry Williamson drives the company's strategic vision and growth. With extensive experience in IT management, he leads with a focus on innovation, excellence, and team empowerment, ensuring NGTSol remains a leader in managed IT services. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Henry Williamson</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Chief Executive Officer (CEO)</p>
              </div>
            </div>
          </div>

          <div class="relative h-[469px]  mt-14  lg:w-[353px]  2xl:w-[363px]">
            <img src="/About/Meet2.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">David Brown leads the IT department with a strong focus on innovation and operational excellence. With years of experience in managing complex IT infrastructures, David ensures that NGTSOL’s technology solutions are robust, scalable, and aligned with our clients’ needs. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">David Brown</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Head of IT Department</p>
              </div>
            </div>
          </div>


          <div class="relative h-[469px]   lg:w-[353px]  2xl:w-[363px]">
            <img src="/About/Meet3.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">As the Head of Information Security, Michael Johnson is responsible for safeguarding NGTSOL’s digital assets and ensuring compliance with industry standards. His deep understanding of cybersecurity threats and proactive approach to risk  keep our systems and data secure. </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Michael Johnson</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Head of Information Security</p>
              </div>
            </div>
          </div>

        </div>
        <div class="flex justify-center lg:gap-x-8 2xl:gap-x-16  mt-16">
          <div class="relative h-[469px] mt-28    lg:w-[353px] 2xl:w-[363px]">
            <img src="/About/Meet4.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">Thomas Lee oversees the development and maintenance of NGTSOL’s corporate culture, ensuring that our values are reflected in every aspect of our operations. With a strong background in organizational development, Thomas works to create an inclusive and collaborative environment </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Thomas Lee</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Corporate & Culture Manager</p>
              </div>
            </div>
          </div>
          <div class="relative h-[469px] mt-14    lg:w-[353px] 2xl:w-[363px]">
            <img src="/About/Meet5.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">Sophia Roberts leads one of NGTSOL’s key business units, driving performance and growth through strategic planning and effective management. Her ability to identify opportunities and optimize operations ensures that our services consistently meet the highest standards of quality and client satisfaction.</p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">Sophia Roberts</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Business Unit Manager</p>
              </div>
            </div>
          </div>

          <div class="relative h-[469px]     lg:w-[353px] 2xl:w-[363px]">
            <img src="/About/Meet6.png" alt="Image 1" class="2xl:h-full 2xl:w-auto  transition-opacity duration-500 ease-in-out hover:opacity-0" />
            <div class="absolute top-0 left-0 h-full w-full flex p-8 bg-blue-500 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 ">
              <p class="text-white text-[22px] leading-[27px] ">James Harris is dedicated to fostering the professional development of NGTSOL’s employees as the Learning & Career Manager. He designs and implements training programs that enhance skills and support career advancement, ensuring that our team members are always equipped with the knowledge  </p>
              <div class="absolute bottom-0 right-0 pl-[31px] pt-[14px] h-[85px] w-[230px] opacity-80  bg-[#FFFFFF]">
                <h2 className="text-[21px] font-[700]">James Harris</h2>
                <p className="text-[14px] font-[500] text-[#888888]">Learning & Career Manager</p>
              </div>
            </div>
          </div>
        </div>

        <h2 data-aos="fade-up"
          data-aos-offset="150" className="text-[28px] md:text-[40px] 2xl:leading-[50px] font-[700] px-6 md:px-10 lg:px-[20%] mb-6  lg:mt-32 2xl:mt-36">
          We're about bridging gaps—in work, in relationships, in tech. We invest everything to craft lifelong experiences.
        </h2>



        <div ref={divRef} className="hidden lg:flex ml-6 justify-center gap-x-4 2xl:gap-x-12">
          <h2
            className="text-[40px] xl:text-[50px] 2xl:text-[75px] font-[700] uppercase text-[#006cfc] tracking-[23px]"
            style={{ marginTop: `${scrollPosition >= startScroll && scrollPosition <= endScroll ? lastMargin.margin1 : lastMargin.margin1}px` }}
          >
            An
          </h2>
          <h2
            className="text-[40px] xl:text-[50px] 2xl:text-[75px] font-[700] uppercase text-[#006cfc] tracking-[23px]"
            style={{ marginTop: `${scrollPosition >= startScroll && scrollPosition <= endScroll ? lastMargin.margin2 : lastMargin.margin2}px` }}
          >
            Enduring
          </h2>
          <h2
            className="text-[40px] xl:text-[50px] 2xl:text-[75px] font-[700] uppercase text-[#006cfc] tracking-[23px]"
            style={{ marginTop: `${scrollPosition >= startScroll && scrollPosition <= endScroll ? lastMargin.margin3 : lastMargin.margin3}px` }}
          >
            Experience.
          </h2>
        </div>
      </div>




    </>



  );
};

export default MeatTheTeam;
