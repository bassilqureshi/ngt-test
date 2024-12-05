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

      <div className='flex flex-col items-center justify-center'>
        <h3 data-aos="fade-up"
          data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[48px] w-[70%] 2xl:w-[77%] leading-[58px] text-center mt-10">
          At NGTSOL, we offer comprehensive Project Management Services designed to help your organization achieve its strategic goals with efficiency and precision. Our expert project managers bring extensive experience and industry best practices to ensure the successful delivery of projects, regardless of size or complexity.
        </h3>

        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#4C96F826] to-[#FFFFFF] mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>
          <div className='w-full lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement1.png' />
          </div>
          <div className='p-6 lg:p-14 w-full lg:w-[55%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Strategic Project Planning
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Effective project management starts with thorough planning. We work closely with your team to define project objectives, scope, timelines, and deliverables. Our strategic approach ensures that all aspects of the project are aligned with your business goals, setting a solid foundation for success.
            </h2>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#FFFFFF] to-[#4C96F826]  mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>

          <div className='p-6 ml-10 lg:p-14 w-full lg:w-[60%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Seamless Project Execution
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Our project managers excel at orchestrating all phases of project execution. By leveraging methodologies such as Agile, Scrum, and Waterfall, we adapt our processes to fit the unique needs of each project. We coordinate resources, manage tasks, and ensure that every aspect of the project is on track, maintaining momentum towards successful completion.            </h2>
          </div>
          <div className='w-full flex justify-end lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement2.png' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#4C96F826] to-[#FFFFFF] mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>
        <div className='w-full lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement3.png' />
          </div>
          <div className='p-6 lg:p-14 w-full lg:w-[55%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Risk Management and Mitigation
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Anticipating and managing risks is a core component of our project management services. We conduct comprehensive risk assessments and develop proactive strategies to mitigate potential issues. Our goal is to minimize disruptions and keep your project moving forward smoothly.
            </h2>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#FFFFFF] to-[#4C96F826]  mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>

          <div className='p-6 ml-10 lg:p-14 w-full lg:w-[60%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Quality Assurance
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Quality is at the heart of everything we do. We implement rigorous quality assurance practices to ensure that project deliverables meet the highest standards. Our commitment to quality ensures that the end results not only meet but exceed your expectations.
            </h2>
          </div>
          <div className='w-full flex justify-end lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement4.png' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#4C96F826] to-[#FFFFFF] mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>
        <div className='w-full lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement5.png' />
          </div>
          <div className='p-6 lg:p-14 w-full lg:w-[55%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Real-Time Monitoring and Reporting
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Transparency and communication are key to effective project management. We provide real-time monitoring and detailed reporting throughout the project lifecycle. Regular updates keep all stakeholders informed of progress, milestones, and any necessary adjustments, fostering a collaborative environment.
            </h2>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#FFFFFF] to-[#4C96F826]  mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>

          <div className='p-6 ml-10 lg:p-14 w-full lg:w-[60%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Post-Project Evaluation and Support
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Our services extend beyond the completion of the project. We offer comprehensive post-project evaluation to analyze performance and identify areas for improvement. Additionally, we provide ongoing support to ensure a smooth transition and sustained success of the project outcomes.
            </h2>
          </div>
          <div className='w-full flex justify-end lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement6.png' />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row bg-gradient-to-r from-[#4C96F826] to-[#FFFFFF] mt-10 lg:mt-28 w-[95%] lg:w-[88%] mx-auto rounded-[50px] lg:rounded-[300px]'>
        <div className='w-full lg:w-[50%] 2xl:w-[40%]  p-6 lg:p-14'>
            <img className='h-auto w-full lg:h-[357px] xl:w-[400px] 2xl:w-[500px]  2xl:h-[457px] lg:w-[477px]' src='/ProjectManagement/ProjectManagement7.png' />
          </div>
          <div className='p-6 lg:p-14 w-full lg:w-[55%] flex flex-col justify-center'>
            <h1 className='text-[#000000] text-[28px] lg:text-[48px] font-[700] leading-[40px] lg:leading-[60px] 2xl:leading-[70px]'>
              Flexible and Scalable Solutions
            </h1>
            <h2 className='text-[18px] lg:text-[18px]  2xl:text-[28px] 2xl:leading-[40px] lg:leading-[22px] text-[#9fa6b6] mt-4 lg:mt-10'>
              NGTSOL's project management services are designed to be flexible and scalable, catering to projects of all sizes and complexities. Whether you are initiating a new project, managing a portfolio of projects, or enhancing existing processes, our tailored solutions meet your specific needs.
            </h2>
          </div>
        </div>


      </div>



    </>

  )
}

export default BelowHero