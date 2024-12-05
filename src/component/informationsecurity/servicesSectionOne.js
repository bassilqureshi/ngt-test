import React, { useEffect, useRef } from "react";

const ServicesSectionOne = () => {
    return (
        <section className="ngt_pm_services info_secu_sec">
            <div className="ngt_container">
                <h1 className="main_heading text-[#006CFC]">Security Consultancy</h1>
                <div className="ngt_row">
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/1.png" />
                            <div className="service_content">
                                <h3>Vulnerability Management</h3>
                                <p>Identify, measure, and evaluate flaws in your system with our comprehensive vulnerability assessment services. Our team of experts conducts thorough reviews to uncover potential weaknesses. By understanding your security habits, you can reduce risks before they become threats. Ensure your system is secure and compliant with our detailed assessment reports.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Nessus</li>
                                    <li>OpenVAS</li>
                                    <li>Rapid7 InsightVM</li>
                                    <li>Retina Network Security Scanner</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/2.png" />
                            <div className="service_content">
                                <h3>Penetration Testing</h3>
                                <p>Protect your network from unauthorized access and cyber threats with our advanced cybersecurity services. We offer firewall management, intrusion detection, and continuous monitoring to safeguard your data. Our solutions are designed to prevent, detect, and respond to security incidents. Ensure the integrity and availability of your network with our professional services.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Metasploit</li>
                                    <li>Nmap</li>
                                    <li>Burp Suite</li>
                                    <li>Wireshark</li>
                                    <li>Kali Linux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/1.png" />
                            <div className="service_content">
                                <h3>Application Security</h3>
                                <p>Protect your application against threats with our robust security services. We conduct thorough code reviews, vulnerability assessments, and security evaluations to identify and mitigate risks. Safeguard sensitive information and ensure compliance with industry standards. Our solutions are designed to help you build and manage secure applications throughout their lifecycle.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Checkmarx</li>
                                    <li>SonarQube</li>
                                    <li>RapiVeracoded7</li>
                                    <li>Veracode</li>
                                    <li>OWASP ZAP (Zed Attack Proxy)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ngt_col-lg-3">
                        <div className="info_service_box">
                            <img src="/InformationSecurity/4.png" />
                            <div className="service_content">
                                <h3>Network Security</h3>
                                <p>Protect your network from unauthorized access and cyber threats with our advanced cybersecurity services. We offer firewall management, intrusion detection, and continuous monitoring to safeguard your data. Our solutions are designed to prevent, detect, and respond to security incidents. Ensure the integrity and availability of your network with our professional services.</p>
                            </div>
                            <div className="service_pills">
                                <ul>
                                    <li>Cisco Security Manager</li>
                                    <li>Wireshark</li>
                                    <li>Nagios</li>
                                    <li>Snort</li>
                                    <li>SolarWinds Network Configuration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOne;
