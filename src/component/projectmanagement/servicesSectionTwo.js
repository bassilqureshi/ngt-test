import React, { useEffect, useRef } from "react";

const ServicesSectionTwo = () => {
    return (
        <section class="ngt_pm_services">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-4"></div>
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box">
                            <img src="/ProjectManagement/3.png" />
                            <div className="service_content">
                                <h3>Risk Management and Mitigation</h3>
                                <p>Anticipating and managing risks is a core component of our project management services. We conduct comprehensive risk assessments and develop proactive strategies to mitigate potential issues. Our goal is to minimize disruptions and keep your project moving forward smoothly.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ngt_row">
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box mb-0">
                            <img src="/ProjectManagement/4.png" />
                            <div className="service_content">
                                <h3>Quality Assurance</h3>
                                <p>Quality is at the heart of everything we do. We implement rigorous quality assurance practices to ensure that project deliverables meet the highest standards. Our commitment to quality ensures that the end results not only meet but exceed your expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-4"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionTwo;
