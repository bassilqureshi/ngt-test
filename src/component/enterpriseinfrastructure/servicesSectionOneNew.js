import React, { useEffect, useRef } from "react";

const ServicesSectionOneNew = () => {
    return (
        <section className="ngt_pm_services infra_section info_secu_sec">
            <div className="ngt_container">
                <div className="ngt_row">
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/5.png" />
                            <div className="service_content">
                                <h3>Systems Management</h3>
                                <p>We manage servers, operating systems, and enterprise applications, ensuring optimal performance. Our expertise spans Active Directory, MFA, SSO, and seamless integration to enhance security and productivity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/6.png" />
                            <div className="service_content">
                                <h3>Cloud Solutions</h3>
                                <p>We build scalable, resilient cloud infrastructures tailored to your needs. From cloud migration to hybrid environments, NGTSOL ensures high performance, security, and reduced downtime in virtualized systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/7.png" />
                            <div className="service_content">
                                <h3>Technical Support Engineering</h3>
                                <p>Our 24/7 technical support team addresses complex IT issues, minimizing downtime and maximizing efficiency. We offer proactive monitoring and quick resolutions to ensure seamless IT operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/8.png" />
                            <div className="service_content">
                                <h3> Office in a Box</h3>
                                <p>NGTSOL provides an all-inclusive IT infrastructure setup, covering network design, hardware, security, and cloud integration. We ensure a reliable, scalable, and secure office environment with ongoing support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOneNew;
