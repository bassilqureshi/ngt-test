import { Button, Divider } from '@mui/material';
import React, { useState } from 'react';

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
const GovernanceRisk7 = [
  { label: "KnowBe4", color: "#7B7B7B" },
  { label: "Infosec IQ", color: "#7B7B7B" },
  { label: "Coursera for Business", color: "#7B7B7B" },
  { label: "SANS Security Awareness", color: "#7B7B7B" },
];

const GovernanceRisk = () => {
  const [hoverIndex1, setHoverIndex1] = useState(null);
  const [hoverIndex2, setHoverIndex2] = useState(null);
  const [hoverIndex3, setHoverIndex3] = useState(null);
  const [hoverIndex4, setHoverIndex4] = useState(null);
  const [hoverIndex5, setHoverIndex5] = useState(null);
  const [hoverIndex6, setHoverIndex6] = useState(null);
  const [hoverIndex7, setHoverIndex7] = useState(null);

  return (
    <div id='governance-risk-&-compliance' className='flex flex-col items-center justify-center'>
      <h4 className="tracking-[1px] font-[700] leading-[43px] py-28 lg:leading-[60px] text-[48px] lg:text-[65px] mt-[40px] lg:mt-[122px] text-[#000000]">
        Governance Risk & Compliance
      </h4>

      <div className='grid-cols-1 lg:grid-cols-2 gap-x-32 grid mt-28 px-48'>
        {/* Section 1 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk1.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            Policies or Procedures Review
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Ensure your organization's policies and procedures are comprehensive and effective with our audit services. We analyze your existing data to identify areas for improvement and take appropriate actions. Our experts provide practical advice to enhance your security. Stay informed and protect your assets with clear and robust policies and procedures.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk1.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex1(index)}
                onMouseLeave={() => setHoverIndex1(null)}
                style={{
                  backgroundColor: hoverIndex1 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex1 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk2.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            Gap Analysis
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Identify and address gaps in your security and compliance systems with our gap analysis services. We evaluate your current situation against industry standards and best practices to pinpoint vulnerabilities. Our detailed reports provide comprehensive information on necessary treatments. Enhance your protection and progress with our expert analysis and recommendations.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk2.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex2(index)}
                onMouseLeave={() => setHoverIndex2(null)}
                style={{
                  backgroundColor: hoverIndex2 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex2 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg mt-28'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk3.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            ISO 27001 Readiness
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Prepare your organization for ISO 27001 certification with our comprehensive ISO 27001 preparation service. We guide you through the entire process, from the initial assessment to the final audit. Our team ensures that your Information Security Management System (ISMS) meets all requirements. Achieve certification and demonstrate your commitment to information security with the help of our experts.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk3.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex3(index)}
                onMouseLeave={() => setHoverIndex3(null)}
                style={{
                  backgroundColor: hoverIndex3 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex3 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg mt-28'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk4.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            SOC 2 Readiness
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Get your organization ready for SOC 2 compliance with our SOC 2 readiness services. We help you understand and meet the requirements necessary to ensure the security, availability, and integrity of your systems. Our approach identifies and addresses any weaknesses, ensuring you pass your SOC 2 audit with confidence. Be proactive and achieve peace of mind with our SOC 2 readiness expertise.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk4.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex4(index)}
                onMouseLeave={() => setHoverIndex4(null)}
                style={{
                  backgroundColor: hoverIndex4 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex4 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg mt-28'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk5.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            Vendor Risk Management
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Protect your organization from third-party risks with our vendor risk management services. We evaluate the security practices of your vendors and partners, ensuring they meet your standards. Our solutions help you mitigate risks associated with third-party relationships, providing a secure and compliant vendor ecosystem. Safeguard your business and maintain trust with effective vendor risk management.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk5.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex5(index)}
                onMouseLeave={() => setHoverIndex5(null)}
                style={{
                  backgroundColor: hoverIndex5 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex5 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 6 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg mt-28'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk6.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            Audit Management
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Streamline your audit processes with our audit management services. We provide tools and guidance to ensure that your audits are thorough, efficient, and compliant with relevant regulations. Our team helps you manage the entire audit lifecycle, from planning to reporting. Stay organized and prepared with our expert audit management solutions.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk6.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex6(index)}
                onMouseLeave={() => setHoverIndex6(null)}
                style={{
                  backgroundColor: hoverIndex6 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex6 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Section 7 */}
        <div className='bg-[#F3F3F3] rounded-[20px] shadow-lg mt-28'>
          <img className='h-[40vh] w-full' src='/InformationSecurity/GovernanceRisk7.png' />
          <h1 className='text-[#006CFC] text-[26px] font-[700] mt-6 lg:mt-6 px-10'>
            Security Awareness Training
          </h1>
          <h2 className='lg:text-[20px] 2xl:text-[21px] leading-[25px] text-[#333333] mt-4 lg:mt-6 px-10'>
            Enhance your organization's security posture with our security awareness training programs. We offer customized training sessions that educate your employees on the latest threats and best practices. Our engaging content ensures that your team is well-equipped to recognize and respond to security challenges. Build a culture of security with our comprehensive training solutions.
          </h2>
          <Divider style={{ marginTop: "30px", marginBottom: "10px", backgroundColor: "#006CFC" }} />
          <div className='px-10 pb-20'>
            {GovernanceRisk7.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onMouseEnter={() => setHoverIndex7(index)}
                onMouseLeave={() => setHoverIndex7(null)}
                style={{
                  backgroundColor: hoverIndex7 === index ? "#006CFC" : "#FFFFFF",
                  color: hoverIndex7 === index ? "#FFFFFF" : button.color,
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "none",
                  marginTop: "20px",
                 
                  paddingTop: "7px",
                  boxShadow: "none",
                  borderRadius: "35px",
                  border: `1px solid ${button.color}`,
                  marginRight: "10px"
                }}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceRisk;
