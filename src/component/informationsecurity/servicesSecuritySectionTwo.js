import React, { useEffect, useRef } from "react";

const ServicesSecuritySectionTwo = () => {
    return (
        <section className="ngt_pm_services info_secu_sec">
            <div className="ngt_container">
                <div className="ngt_row">
                    <div className="ngt_col-lg-1 ngt_col-lg-1-half"></div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/5.png" />
                            <div className="service_content">
                                <h3>System Security</h3>
                                <p>Protect your system against malicious and unauthorized attacks with our comprehensive security solutions. We offer endpoint protection, system hardening, and security monitoring to safeguard your valuable assets. Our effective approach helps prevent cybercrime and ensures best security practices. Manage the confidentiality, integrity, and availability of your systems with our expert services.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Symantec Endpoint</li>
                                    <li>McAfee Total</li>
                                    <li>Bitdefender GravityZone</li>
                                    <li>CrowdStrike F..</li>
                                    <li>Sophos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/6.png" />
                            <div className="service_content">
                                <h3>Cloud Security</h3>
                                <p>Protect your cloud environment with our comprehensive cloud security services. We offer cloud computing, continuous monitoring, and incident response to safeguard your data and applications. Our experts help you navigate the complexities of cloud security and ensure compliance with industry standards. Achieve optimal security in the cloud with our tailored solutions.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Security</li>
                                    <li>Google Cloud</li>
                                    <li>Microsoft Azure</li>
                                    <li>Palo Alto Net</li>
                                    <li>Snort</li>
                                    <li>Trend Micro Cloud One</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/7.png" />
                            <div className="service_content">
                                <h3>Infrastructure Hardening</h3>
                                <p>Strengthen your infrastructure against cyber threats with our reinforcement services. We use best practices to protect your servers, networks, and devices. Our team performs rigorous testing and implements security controls to minimize vulnerabilities. Enhance your overall security and safeguard your valuable assets with our expert solutions.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Ansible</li>
                                    <li>Puppet</li>
                                    <li>Chef</li>
                                    <li>SaltStack</li>
                                    <li>Bastille Linux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSecuritySectionTwo;
