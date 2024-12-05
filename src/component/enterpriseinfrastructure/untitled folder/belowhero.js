import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const buttonData = [
  { label: "Nessus", color: "#7B7B7B" },
  { label: "OpenVAS", color: "#7B7B7B" },
  { label: "Rapid7 InsightVM", color: "#7B7B7B" },
  { label: "Retina Network Security Scanner", color: "#7B7B7B" },
];
const buttonData2 = [
  { label: "Metasploit", color: "#7B7B7B" },
  { label: "Nmap", color: "#7B7B7B" },
  { label: "Burp Suite", color: "#7B7B7B" },
  { label: "Wireshark", color: "#7B7B7B" },
  { label: "§  Kali Linux", color: "#7B7B7B" },
];


const BelowHero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>


      <div id='overview' className='flex flex-col items-center justify-center'>
        <h3 data-aos="fade-up"
          data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[48px] w-[70%] 2xl:w-[77%] leading-[58px] text-center mt-10">
          Transform your business operations with comprehensive planning and performance management solutions tailored to drive efficiency and growth
        </h3>
        <div className=" flex mt-72  items-end justify-end  w-[100%]">
          <div className="mt-16 lg:mt-32 xl:mt-20 2xl:mt-14 w-[90%]  h-full relative">
            <img src="/EnterprisePlanning/AnaplanPage.png" className=" w-[90%] ml-auto" />


            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between   w-[40%]">

              <div data-aos="fade-right"
                data-aos-offset="150"
                className="bg-[#F3F3F3] lg:ml-10 2xl:ml-14 p-6 lg:p-14 h-[500px] lg:h-[570px] xl:h-[480px] 2xl:h-[350px] md:h-[400px] lg:w-[496px] xl:w-[646px] 2xl:w-[716px] leading-[30px] flex flex-col justify-between mt-[-170px] lg:mt-[-290px] xl:mt-[-250px] 2xl:mt-[-190px] shadow-[-6px_0_10px_rgba(0,0,0,0.1)]">
                <p data-aos="fade-up"
                  data-aos-offset="300"
                  className="text-[16px] md:text-[26px]  w-[100%]  leading-[20px] md:leading-[30px] lg:leading-[50px] text-[#000000]">
                  At NGTSOL, we offer implementation services for Enterprise Planning and Performance Management Platform (Anaplan), a cutting-edge solution designed to revolutionize the way your organization plans and manages its operations. 
                </p>
              </div>


            </div>
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-32 px-20'>
          <div className='px-20'>
            <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan1.png' />

            <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
              Finance
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#333333] mt-4 lg:mt-10'>
              In the fast-paced world of finance, precision and agility are paramount. Our Anaplan platform empowers your finance team with robust planning, budgeting, and forecasting capabilities. Gain real-time insights and make informed decisions with confidence. Our solution enables you to seamlessly integrate financial data, automate processes, and enhance collaboration across departments. Stay ahead of the competition by leveraging our comprehensive finance planning tools to drive business growth and profitability.
            </h2>

          </div>
          <div className='px-20'>
            <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan2.png' />

            <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
              Sales and Marketing
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#333333] mt-4 lg:mt-10'>
              Maximize your sales potential and marketing effectiveness with our Anaplan solutions. By aligning sales and marketing strategies, you can ensure that your teams are working towards common goals. Our platform offers advanced forecasting, territory and quota management, and campaign performance analysis. With Anaplan, you can optimize your sales processes, improve lead generation, and boost customer engagement. Drive revenue growth by making data-driven decisions that enhance your sales and marketing efforts.
            </h2>

          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
          <div className='px-20'>
            <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan3.png' />

            <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
              Supply Chain
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#333333] mt-4 lg:mt-10'>
              Efficient supply chain management is critical to your business success. Our Anaplan platform provides end-to-end visibility and control over your supply chain operations. From demand planning and inventory management to production scheduling and logistics, our solution helps you streamline processes and reduce costs. Anticipate and respond to market changes with agility, ensuring that your supply chain remains resilient and responsive. Enhance collaboration with suppliers and partners to optimize your supply chain performance.
            </h2>

          </div>
          <div className='px-20'>
            <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan4.png' />

            <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
              HR & Workforce
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#333333] mt-4 lg:mt-10'>
              Your people are your most valuable asset. With our Anaplan HR & Workforce solutions, you can effectively plan and manage your workforce to align with your strategic goals. Our platform supports workforce planning, talent management, and compensation planning, helping you attract, retain, and develop top talent. Ensure that you have the right people in the right roles, and make informed decisions about your human capital investments. Create a high-performance culture by leveraging data-driven insights to drive employee engagement and productivity.
            </h2>

          </div>
        </div>


      </div>





    </>

  )
}

export default BelowHero