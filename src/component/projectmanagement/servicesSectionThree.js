import React, { useEffect, useRef } from "react";

const ServicesSectionThree = () => {
    return (
        <section class="ngt_pm_services">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-4"></div>
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box">
                            <img src="/ProjectManagement/5.png" />
                            <div className="service_content">
                                <h3>Real-Time Monitoring and Reporting</h3>
                                <p>Transparency and communication are key to effective project management. We provide real-time monitoring and detailed reporting throughout the project lifecycle. Regular updates keep all stakeholders informed of progress, milestones, and any necessary adjustments, fostering a collaborative environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ngt_row">
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box mb-0">
                            <img src="/ProjectManagement/6.png" />
                            <div className="service_content">
                                <h3>Post-Project Evaluation and Support</h3>
                                <p>Our services extend beyond the completion of the project. We offer comprehensive post-project evaluation to analyze performance and identify areas for improvement. Additionally, we provide ongoing support to ensure a smooth transition and sustained success of the project outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-4"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionThree;
