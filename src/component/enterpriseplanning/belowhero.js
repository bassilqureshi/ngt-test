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
  { label: "Kali Linux", color: "#7B7B7B" },
];


const BelowHero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>

      <div className='flex flex-col items-center justify-center'>
        <h3 data-aos="fade-up"
          data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[48px] w-[70%] 2xl:w-[77%] leading-[58px] text-center mt-10">
          Transform your business operations with comprehensive planning and performance management solutions tailored to drive efficiency and growth
        </h3>


      </div>





    </>

  )
}

export default BelowHero