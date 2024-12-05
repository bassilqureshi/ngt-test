import React, { useEffect, useRef } from "react";

const ServicesSectionOne = () => {
    return (
        <section className="ngt_pm_services infra_section info_secu_sec">
            <div className="ngt_container">
                <h1 className="main_heading">Enterprise Infrastructure Services</h1>
                <div className="ngt_row">
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/1.png" />
                            <div className="service_content">
                                <h3>Managed SOC</h3>
                                <p>NGTSOL's Managed SOC provides 24/7 security monitoring, real-time threat detection, and incident response to safeguard your business. We ensure compliance and tailored security solutions for proactive protection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/2.png" />
                            <div className="service_content">
                                <h3>Infrastructure Solution</h3>
                                <p>We design, implement, and manage scalable IT infrastructure tailored to your business. From network architecture to cloud migration, our solutions enhance efficiency, agility, and long-term growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/1.png" />
                            <div className="service_content">
                                <h3>Backup and Storage</h3>
                                <p>NGTSOL delivers secure, scalable backup and storage solutions, including cloud and hybrid models. With real-time data recovery and long-term archiving, we ensure data availability and business continuity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/EnterpriseInfra/4.png" />
                            <div className="service_content">
                                <h3>Networking</h3>
                                <p>Our networking services cover design, implementation, and monitoring, ensuring secure, reliable performance. We provide top-tier hardware, proactive support, and robust firewalls for seamless, future-proof networking infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOne;
