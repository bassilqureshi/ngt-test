import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const SecurityConsultancy1 = [
    { label: "Expertise and Experience ", color: "#7B7B7B" },
    { label: "Comprehensive Service Offering", color: "#7B7B7B" },
    { label: "Advanced Technologies", color: "#7B7B7B" },
    { label: "Tailored Solutions", color: "#7B7B7B" },
    { label: "Data Analytics and Insights", color: "#7B7B7B" },
    { label: "Industry-Specific Solutions", color: "#7B7B7B" },
    { label: "Ongoing Support and Maintenance", color: "#7B7B7B" },
];
const SecurityConsultancy2 = [
    { label: "Strategic Consulting", color: "#7B7B7B" },
    { label: "Training and Enablement", color: "#7B7B7B" },
    { label: "Comprehensive Service Offering", color: "#7B7B7B" },
    { label: "Competitive Pricing", color: "#7B7B7B" },
    { label: "Industry-Specific Solutions", color: "#7B7B7B" },
    { label: "Ongoing Support and Maintenance", color: "#7B7B7B" },
];

const ErpSection = () => {
    const [hoverIndex1, setHoverIndex1] = useState(null);
    const [hoverIndex2, setHoverIndex2] = useState(null);
    return (
        <>

            <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
                <div className='px-20'>
                    <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan5.png' />

                    <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
                        Data Management Services
                    </h1>
                    <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
                        In today’s data-driven world, effective data management is crucial for businesses to thrive. Our Data Management Services are designed to help you harness the power of your data, ensuring it is accurate, accessible, and actionable. From data integration and quality management to analytics and governance, we provide comprehensive solutions to meet all your data needs.
                    </h2>
                    <div>
                        {SecurityConsultancy1.map((button, index) => (
                            <Button
                                key={index}
                                variant="contained"
                                onMouseEnter={() => setHoverIndex1(index)}
                                onMouseLeave={() => setHoverIndex1(null)}
                                style={{
                                    cursor:"default",
                                    backgroundColor: hoverIndex1 === index ? "#006CFC" : "#FFFFFF",
                                    color: hoverIndex1 === index ? "#FFFFFF" : button.color,
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    marginTop: "20px",
                                    height: "37px",
                                    paddingTop: "7px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    border: `1px solid ${button.color}`,
                                    marginRight: "10px"
                                }}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                    <div class="relative p-6 rounded-2xl  lg:w-full  h-auto bg-[#006CFC] lg:mt-20 ">
                        <h3 className='text-left text-[#FFFFFF] lg:text-[17px] lg:leading-[15px] font-[500]'>
                            Get Started with Our
                        </h3>
                        <h1 className='text-[#FFFFFF] text-[22px] font-[700] leading-[20px] mt-3'>
                            Data Management Services
                        </h1>
                        <h3 className='text-left text-[#FFFFFF] lg:text-[16px] lg:leading-[18px] font-[500] mt-3'>
                            By choosing us for your Anaplan services, you are partnering with a team committed to your success, equipped with the expertise and dedication to transform your planning processes and drive business growth. Contact us today to learn how we can help you transform your business operations and drive performance excellence.

                        </h3>
                    </div>
                </div>

                <div id='erp-solutions' className='px-20'>


                    <img className='h-[225px] w-[234px]' src='/EnterprisePlanning/Anaplan6.png' />

                    <h1 className='text-[#000000] text-[48px] font-[700] leading-[70px] mt-6 lg:mt-12'>
                        SAP Consulting Services
                    </h1>
                    <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
                        Unlock the full potential of your data with our comprehensive Data Management Services. Contact us today to learn how we can help you achieve greater efficiency, compliance, and business intelligence through effective data management
                    </h2>
                    <div>
                        {SecurityConsultancy2.map((button, index) => (
                            <Button
                                key={index}
                                variant="contained"
                                onMouseEnter={() => setHoverIndex2(index)}
                                onMouseLeave={() => setHoverIndex2(null)}
                                style={{
                                    cursor:"default",
                                    backgroundColor: hoverIndex2 === index ? "#006CFC" : "#FFFFFF",
                                    color: hoverIndex2 === index ? "#FFFFFF" : button.color,
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    marginTop: "20px",
                                    height: "37px",
                                    paddingTop: "7px",
                                    boxShadow: "none",
                                    borderRadius: "35px",
                                    border: `1px solid ${button.color}`,
                                    marginRight: "10px"
                                }}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                    <div class="relative p-6 rounded-2xl  lg:w-full  h-auto bg-[#006CFC] mt-10">
                        <h3 className='text-left text-[#FFFFFF] lg:text-[17px] lg:leading-[15px] font-[500]'>
                            Get Started with Our
                        </h3>
                        <h1 className='text-[#FFFFFF] text-[22px] font-[700] leading-[20px] mt-3'>
                            SAP Consulting Services
                        </h1>
                        <h3 className='text-left text-[#FFFFFF] lg:text-[16px] lg:leading-[18px] font-[500] mt-3'>
                            Transform your business with our expert SAP Consulting Services. Contact us today to learn how we can help you achieve greater efficiency, agility, and growth through effective SAP implementation and optimization.

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErpSection