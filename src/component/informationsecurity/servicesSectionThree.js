import React, { useEffect, useRef } from "react";

const ServicesSectionThree = () => {
    const GovernanceRisk1 = [
        { label: "Confluence", color: "#7B7B7B" },
        { label: "PolicyTech", color: "#7B7B7B" },
        { label: "SharePoint", color: "#7B7B7B" },
        { label: "ZenGRC", color: "#7B7B7B" },
    ];
    const GovernanceRisk2 = [
        { label: "GRC Platforms", color: "#7B7B7B" },
        { label: "NIST CSF Toolkit", color: "#7B7B7B" },
        { label: "Microsoft Compliance Manager", color: "#7B7B7B" },
        { label: "Gap Analysis Toolkits ", color: "#7B7B7B" },
    ];
    return (
        <section class="ngt_pm_services ngt_governance_risk gv_risk_1">
            <div class="ngt_container">
                <h1 className="main_heading heading_with_logo"><img src="/InformationSecurity/ngt-logo.svg" /> Governance Risk & Compliance</h1>
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="risk_box">
                            <img src="/InformationSecurity/GovernanceRisk1.png" />
                            <div className="risk_content">
                                <h2>Policies or Procedures Review</h2>
                                <p>Ensure your organization's policies and procedures are comprehensive and effective with our audit services. We analyze your existing data to identify areas for improvement and take appropriate actions. Our experts provide practical advice to enhance your security. Stay informed and protect your assets with clear and robust policies and procedures</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk1.map((button, index) => (
                                            <li
                                                key={index}
                                                variant="contained"
                                            >
                                                {button.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-6">
                        <div className="risk_box">
                            <img src="/InformationSecurity/GovernanceRisk2.png" />
                            <div className="risk_content">
                                <h2>Gap Analysis</h2>
                                <p>Identify and address gaps in your security and compliance systems with our gap analysis services. We evaluate your current situation against industry standards and best practices to pinpoint vulnerabilities. Our detailed reports provide comprehensive information on necessary treatments. Enhance your protection and progress with our expert analysis and recommendations.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk2.map((button, index) => (
                                            <li
                                                key={index}
                                                variant="contained"
                                            >
                                                {button.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionThree;
