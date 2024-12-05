import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const buttonData = [
  { label: "Nessus", color: "#7B7B7B" },
  { label: "OpenVAS", color: "#7B7B7B" },
  { label: "Rapid7 InsightVM", color: "#7B7B7B" },
  { label: "Retina Network Security Scanner", color: "#7B7B7B" },
];
const buttonData2 = [
  { label: "Metasploit", color: "#7B7B7B" },
  { label: "Nmap", color: "#7B7B7B" },
  { label: "Burp Suite", color: "#7B7B7B" },
  { label: "Wireshark", color: "#7B7B7B" },
  { label: "§  Kali Linux", color: "#7B7B7B" },
];
const buttonData3 = [
  { label: "Checkmarx", color: "#7B7B7B" },
  { label: "SonarQube", color: "#7B7B7B" },
  { label: "Veracode", color: "#7B7B7B" },
  { label: " AppScan", color: "#7B7B7B" },
  { label: " OWASP ZAP (Zed Attack Proxy)", color: "#7B7B7B" },
];
const buttonData4 = [
  { label: "Cisco Security Manager", color: "#7B7B7B" },
  { label: "Wireshark", color: "#7B7B7B" },
  { label: "Snort", color: "#7B7B7B" },
  { label: "SolarWinds Network Configuration Manager", color: "#7B7B7B" },
  { label: "Nagios", color: "#7B7B7B" },
];
const buttonData5 = [
  { label: "Symantec Endpoint Protection", color: "#7B7B7B" },
  { label: "McAfee Total Protection", color: "#7B7B7B" },
  { label: "Bitdefender GravityZone", color: "#7B7B7B" },
  { label: "CrowdStrike Falcon", color: "#7B7B7B" },
  { label: "Sophos Intercept X", color: "#7B7B7B" },
];
const buttonData6 = [
  { label: "AWS Security Hub", color: "#7B7B7B" },
  { label: "Microsoft Azure Security Center", color: "#7B7B7B" },
  { label: "Palo Alto Networks Prisma Cloud", color: "#7B7B7B" },
  { label: "Trend Micro Cloud One", color: "#7B7B7B" },
  { label: "§  Google Cloud Security Command Center", color: "#7B7B7B" },
];
const buttonData7 = [
  { label: "Ansible", color: "#7B7B7B" },
  { label: "Chef", color: "#7B7B7B" },
  { label: "Puppet", color: "#7B7B7B" },
  { label: "SaltStack", color: "#7B7B7B" },
  { label: "Bastille Linux", color: "#7B7B7B" },
];

const BelowHero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>


      <div id="security-consultancy" className='flex flex-col items-center justify-center'>
        <h3 data-aos="fade-up"
          data-aos-offset="150" data-aos-anchor-placement="top-bottom" className="text-black z-40 font-[100] text-[48px] w-[70%] 2xl:w-[77%] leading-[58px] text-center mt-10">
          Implement a robust security architecture that seamlessly integrates across networks, cloud platforms, endpoints, and email systems, ensuring the protection of sensitive data at all times.      </h3>
        <h4 className="tracking-[1px] font-[700] leading-[43px] lg:leading-[60px] text-[48px] lg:text-[65px] mt-[40px] lg:mt-[122px] text-[#222222]">
          Security Consultancy
        </h4>

        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy1.png' />
          </div>
          
          <div className='px-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Vulnerability Management
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Identify, measure, and evaluate flaws in your system with our comprehensive vulnerability assessment services. Our team of experts conducts thorough reviews to uncover potential weaknesses. By understanding your security habits, you can reduce risks before they become threats. Ensure your system is secure and compliant with our detailed assessment reports.
            </h2>
            <div>
              {buttonData.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>

          <div className='pr-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Penetration Testing
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Enhance your security with our penetration testing services. Our certified ethical hackers simulate real-world attacks using advanced techniques to identify and remediate vulnerabilities. Gain deeper insights into your security with our detailed reports and actionable remediation instructions. Strengthen your defenses against cyber threats by addressing vulnerabilities before they can be exploited.            </h2>
            <div>
              {buttonData2.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy2.png' />
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy3.png' />
          </div>
          <div className='px-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Application Security
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Protect your application against threats with our robust security services. We conduct thorough code reviews, vulnerability assessments, and security evaluations to identify and mitigate risks. Safeguard sensitive information and ensure compliance with industry standards. Our solutions are designed to help you build and manage secure applications throughout their lifecycle.            </h2>
            <div>
              {buttonData3.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>

          <div className='pr-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Network Security
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Protect your network from unauthorized access and cyber threats with our advanced cybersecurity services. We offer firewall management, intrusion detection, and continuous monitoring to safeguard your data. Our solutions are designed to prevent, detect, and respond to security incidents. Ensure the integrity and availability of your network with our professional services.            </h2>
            <div>
              {buttonData4.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy4.png' />
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy5.png' />
          </div>
          <div className='px-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              System Security            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Protect your system against malicious and unauthorized attacks with our comprehensive security solutions. We offer endpoint protection, system hardening, and security monitoring to safeguard your valuable assets. Our effective approach helps prevent cybercrime and ensures best security practices. Manage the confidentiality, integrity, and availability of your systems with our expert services.            </h2>
            <div>
              {buttonData5.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>

          <div className='pr-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Cloud Security
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Protect your cloud environment with our comprehensive cloud security services. We offer cloud computing, continuous monitoring, and incident response to safeguard your data and applications. Our experts help you navigate the complexities of cloud security and ensure compliance with industry standards. Achieve optimal security in the cloud with our tailored solutions.            </h2>
            <div>
              {buttonData6.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy6.png' />
          </div>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 grid mt-28 px-20'>
          <div>
            <img className='h-full w-full' src='/InformationSecurity/SecurityConsultancy7.png' />
          </div>
          <div className='px-20'>
            <h1 className='text-[#006CFC] text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[70px] font-[700] leading-[70px] mt-6 lg:mt-0'>
              Infrastructure Hardening
            </h1>
            <h2 className=' lg:text-[20px] 2xl:text-[21px] text-[#9fa6b6] mt-4 lg:mt-10'>
              Strengthen your infrastructure against cyber threats with our reinforcement services. We use best practices to protect your servers, networks, and devices. Our team performs rigorous testing and implements security controls to minimize vulnerabilities. Enhance your overall security and safeguard your valuable assets with our expert solutions.            </h2>
            <div>
              {buttonData7.map((button, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    cursor:'default',
                    backgroundColor: hoverIndex === index ? "#006CFC" : "#FFFFFF",
                    color: hoverIndex === index ? "#FFFFFF" : button.color,
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "none",
                    marginTop: "20px",
                   
                    // width: "121px",
                    paddingTop: "7px",
                    boxShadow: "none",
                    borderRadius: "35px",
                    border: `1px solid ${button.color}`,
                    marginRight: "10px" // Optional: add margin between buttons
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>



    </>

  )
}

export default BelowHero