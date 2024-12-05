import React, { useEffect, useRef } from "react";

const ServicesGovFour = () => {
    const GovernanceRisk7 = [
        { label: "KnowBe4", color: "#7B7B7B" },
        { label: "Infosec IQ", color: "#7B7B7B" },
        { label: "Coursera for Business", color: "#7B7B7B" },
        { label: "SANS Security Awareness", color: "#7B7B7B" },
    ];
    return (
        <section class="ngt_pm_services ngt_governance_risk">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-6">
                        <div className="risk_box">
                            <img src="/InformationSecurity/GovernanceRisk7.png" />
                            <div className="risk_content">
                                <h2>Security Awareness Training</h2>
                                <p>Enhance your organization's security posture with our security awareness training programs. We offer customized training sessions that educate your employees on the latest threats and best practices. Our engaging content ensures that your team is well-equipped to recognize and respond to security challenges. Build a culture of security with our comprehensive training solutions.</p>
                                <div className="service_pills">
                                    <ul>
                                        {GovernanceRisk7.map((button, index) => (
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

export default ServicesGovFour;
