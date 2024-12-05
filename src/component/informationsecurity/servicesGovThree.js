import React, { useEffect, useRef } from "react";

const ServicesGovThree = () => {
    const GovernanceRisk5 = [
        { label: "RiskLens", color: "#7B7B7B" },
        { label: "Resolver", color: "#7B7B7B" },
        { label: "LogicGate", color: "#7B7B7B" },
        { label: "Archer IT Risk Management", color: "#7B7B7B" },
    ];
    const GovernanceRisk6 = [
        { label: "ACL GRC", color: "#7B7B7B" },
        { label: "AuditBoard", color: "#7B7B7B" },
        { label: "Netwrix Auditor", color: "#7B7B7B" },
    ];
    return (
        <section class="ngt_pm_services ngt_governance_risk gv_risk_3">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="risk_box">
                            <img src="/InformationSecurity/GovernanceRisk5.png" />
                            <div className="risk_content">
                                <h2>Vendor Risk Management</h2>
                                <p>Protect your organization from third-party risks with our vendor risk management services. We evaluate the security practices of your vendors and partners, ensuring they meet your standards. Our solutions help you mitigate risks associated with third-party relationships, providing a secure and compliant vendor ecosystem. Safeguard your business and maintain trust with effective vendor risk management.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk5.map((button, index) => (
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
                            <img src="/InformationSecurity/GovernanceRisk6.png" />
                            <div className="risk_content">
                                <h2>Audit Management</h2>
                                <p>Streamline your audit processes with our audit management services. We provide tools and guidance to ensure that your audits are thorough, efficient, and compliant with relevant regulations. Our team helps you manage the entire audit lifecycle, from planning to reporting. Stay organized and prepared with our expert audit management solutions.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk6.map((button, index) => (
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

export default ServicesGovThree;
