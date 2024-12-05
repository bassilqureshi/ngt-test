import React, { useEffect, useRef } from "react";

const ServicesSectionOne = () => {
    return (
        <section class="ngt_pm_services info_operation_center ep_operation_sec">
            <div class="ngt_container">
                {/* <h1 className="main_heading text-[#006CFC]">Security Consultancy</h1> */}
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/EnterprisePlanning/Anaplan1.png" />
                                <div className="operation_line"></div>
                                <h2>Finance</h2>
                                <p>In the fast-paced world of finance, precision and agility are paramount. Our Anaplan platform empowers your finance team with robust planning, budgeting, and forecasting capabilities. Gain real-time insights and make informed decisions with confidence. Our solution enables you to seamlessly integrate financial data, automate processes, and enhance collaboration across departments. Stay ahead of the competition by leveraging our comprehensive finance planning tools to drive business growth and profitability.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/EnterprisePlanning/Anaplan2.png" />
                                <div className="operation_line"></div>
                                <h2>Sales and Marketing</h2>
                                <p>Maximize your sales potential and marketing effectiveness with our Anaplan solutions. By aligning sales and marketing strategies, you can ensure that your teams are working towards common goals. Our platform offers advanced forecasting, territory and quota management, and campaign performance analysis. With Anaplan, you can optimize your sales processes, improve lead generation, and boost customer engagement. Drive revenue growth by making data-driven decisions that enhance your sales and marketing efforts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOne;
