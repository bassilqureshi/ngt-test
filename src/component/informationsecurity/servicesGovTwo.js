import React, { useEffect, useRef } from "react";

const ServicesGovTwo = () => {
    const GovernanceRisk3 = [
        { label: "ISMS.online", color: "#7B7B7B" },
        { label: "Axio360", color: "#7B7B7B" },
        { label: "Vanta", color: "#7B7B7B" },
        { label: "OneTrust", color: "#7B7B7B" },
    ];
    const GovernanceRisk4 = [
        { label: "Vanta", color: "#7B7B7B" },
        { label: "Secureframe", color: "#7B7B7B" },
        { label: "Drata", color: "#7B7B7B" },
        { label: "A-LIGN", color: "#7B7B7B" },
    ];
    return (
        <section class="ngt_pm_services ngt_governance_risk gv_risk_2">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="risk_box">
                            <img src="/InformationSecurity/GovernanceRisk3.png" />
                            <div className="risk_content">
                                <h2>ISO 27001 Readiness</h2>
                                <p>Prepare your organization for ISO 27001 certification with our comprehensive ISO 27001 preparation service. We guide you through the entire process, from the initial assessment to the final audit. Our team ensures that your Information Security Management System (ISMS) meets all requirements. Achieve certification and demonstrate your commitment to information security with the help of our experts.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk3.map((button, index) => (
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
                            <img src="/InformationSecurity/GovernanceRisk4.png" />
                            <div className="risk_content">
                                <h2>SOC 2 Readiness</h2>
                                <p>Get your organization ready for SOC 2 compliance with our SOC 2 readiness services. We help you understand and meet the requirements necessary to ensure the security, availability, and integrity of your systems. Our approach identifies and addresses any weaknesses, ensuring you pass your SOC 2 audit with confidence. Be proactive and achieve peace of mind with our SOC 2 readiness expertise.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk4.map((button, index) => (
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

export default ServicesGovTwo;
