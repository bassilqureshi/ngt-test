import React, { useEffect, useRef } from "react";

const ServicesSectionOne = () => {
    return (
        <section className="ngt_tp_services">
            <div className='tp_content_box flex mt-32 px-20'>
                <div className='tp_heading_sec_box lg:w-[60%] xl:w-[70%] flex items-center'>

                    <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#444444] pr-8 mt-4 lg:mt-0'>
                        At NGTSol, our Technology Procurement & Licensing services are meticulously crafted to empower your business with cutting-edge technology solutions while optimizing costs and ensuring stringent compliance. We begin our process with a comprehensive needs assessment to gain a deep understanding of your unique business requirements. This enables us to identify and select the most suitable products and services tailored to your specific needs.
                    </h2>

                </div>
                <div className='tp_box_img flex justify-end lg:w-[40%] xl:w-[30%]'>
                    <img className='h-[344px] w-[397px] ' src='/TechnolgyProcurement/TeamProcurement1.png' />


                </div>
            </div>
            <div className='tp_content_box flex mt-32 px-20'>
                <div className='tp_box_img flex justify-start lg:w-[40%] xl:w-[30%]'>
                    <img className='h-[344px] w-[397px] ' src='/TechnolgyProcurement/TeamProcurement2.png' />


                </div>
                <div className='tp_heading_sec_box lg:w-[60%] xl:w-[70%] flex items-center'>

                    <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#444444] pl-8 mt-4 lg:mt-0'>
                        Leveraging our extensive network of industry connections, we conduct thorough research and evaluations of potential suppliers. Our decision-making process is underpinned by detailed analyses of Total Cost of Ownership (TCO) and Return on Investment (ROI), ensuring you receive maximum value from your investments.
                    </h2>

                </div>

            </div>
            <div className='tp_content_box flex mt-32 px-20'>
                <div className='tp_heading_sec_box lg:w-[60%] xl:w-[70%] flex items-center'>

                    <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#444444] pr-8 mt-4 lg:mt-0'>
                        Our experienced team excels in negotiating favorable terms and conditions with vendors to secure the best possible deals. We manage purchase orders with precision, ensuring timely delivery and seamless implementation of your technology solutions, thus minimizing any disruption to your business operations.
                    </h2>

                </div>
                <div className='tp_box_img flex justify-end lg:w-[40%] xl:w-[30%]'>
                    <img className='h-[344px] w-[397px]  ' src='/TechnolgyProcurement/TeamProcurement3.png' />


                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOne;
