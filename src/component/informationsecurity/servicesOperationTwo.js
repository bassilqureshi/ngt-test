import React, { useEffect, useRef } from "react";

const ServicesOperationTwo = () => {
    return (
        <section class="ngt_pm_services info_operation_center">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/InformationSecurity/SecurityOperation3.png" />
                                <div className="operation_line"></div>
                                <h2>Incident & Breach Response</h2>
                                <p>Minimize damage and recover quickly from security incidents with our expert incident response and breach services. Our dedicated team is prepared to help you manage and mitigate the impact of cyber incidents. We provide rapid response, thorough investigation, and effective remediation strategies. Protect your reputation and assets with our comprehensive solutions.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Swimlane</li>
                                    <li>IBM Resilient</li>
                                    <li>Splunk Phantom</li>
                                    <li>Rapid7 InsightIDR</li>
                                    <li>ServiceNow Security Incident Response</li>
                                    <li>Cortex XSOAR (formerly Demisto)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-6">
                        <div className="operation_box">
                            <div className="operation_content">
                                <img src="/InformationSecurity/SecurityOperation1.png" />
                                <div className="operation_line"></div>
                                <h2>24x7 Monitoring</h2>
                                <p>Ensure 24/7 security with our round-the-clock monitoring service. Our Security Operations Center (SOC) continually monitors your system for suspicious activity and potential threats. We provide instant alerts, emergency response, and detailed instructions to keep you informed and protected. Enhance your security and gain peace of mind with our comprehensive monitoring services</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Secureworks</li>
                                    <li>IBM Managed Security Services</li>
                                    <li>AT&T Cybersecurity</li>
                                    <li>Palo Alto Networks Managed Detection</li>
                                    <li>CrowdStrike Falcon Complete</li>
                                    <li>FireEye Managed Defense</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOperationTwo;
