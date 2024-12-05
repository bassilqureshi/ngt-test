import React, { useEffect, useRef } from "react";

const ServicesSectionOneNew = () => {
    return (
        <section class="ngt_pm_services info_operation_center ep_operation_sec">
            <div class="ngt_container">
                {/* <h1 className="main_heading text-[#006CFC]">Security Consultancy</h1> */}
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/EnterprisePlanning/Anaplan3.png" />
                                <div className="operation_line"></div>
                                <h2>Supply Chain</h2>
                                <p>Efficient supply chain management is critical to your business success. Our Anaplan platform provides end-to-end visibility and control over your supply chain operations. From demand planning and inventory management to production scheduling and logistics, our solution helps you streamline processes and reduce costs. Anticipate and respond to market changes with agility, ensuring that your supply chain remains resilient and responsive. Enhance collaboration with suppliers and partners to optimize your supply chain performance.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/EnterprisePlanning/Anaplan1.png" />
                                <div className="operation_line"></div>
                                <h2>HR & Workforce</h2>
                                <p>Your people are your most valuable asset. With our Anaplan HR & Workforce solutions, you can effectively plan and manage your workforce to align with your strategic goals. Our platform supports workforce planning, talent management, and compensation planning, helping you attract, retain, and develop top talent. Ensure that you have the right people in the right roles, and make informed decisions about your human capital investments. Create a high-performance culture by leveraging data-driven insights to drive employee engagement and productivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOneNew;
