import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Footer = ({ fullpageApi }) => {

  const navigateToSection = () => {
    if (fullpageApi) {
      fullpageApi.moveTo(1); // fullPage.js uses 1-based index
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scroll smooth
    });
  };

  // const navigate = useNavigate();

  // const handleNavLinkClick = (link) => {
  //   if (fullpageApi) {
  //     // Move to the first section, then wait before navigating
  //     fullpageApi.moveTo(1); // FullPage.js uses 1-based index

  //     setTimeout(() => {
  //       navigate(link); // Navigate to the target route
  //     }, 500); // Adjust delay as necessary based on animation duration
  //   } else {
  //     navigate(link); // Navigate directly if fullpageApi is unavailable
  //   }
  // };
  const handleNavLinkClick = (link) => {
    // Navigate to the first section
    fullpageApi.moveTo(1);
    // Redirect to target route
    window.location.href = link;
  };

  return (
    <div>

      <footer className="bg-[#006CFC] z-50 relative mt-20">
        <div className="  w-full px-4 lg:px-[30px] py-6 pt-[30px] lg:pt-[30px]">
          <div className="flex text-BACKGROUND_COLOR_MAIN items-center justify-between">
            <div>
              <h2 className="text-[24px] md:text-[34px] lg:text-[34px] leading-[37px] lg:leading-[53px] text-[white] ">Crafting Amazing Digital Solutions For You</h2>
            </div>
            <div>
              <img src="/Footer/NGTFooterLogo.svg" alt="NGT Logo" className="h-[94px] md:h-[12 0px] lg:h-[80px]" />
            </div>

          </div>
          <hr className=" mt-[30px] sm:mx-auto border-1 lg:border-2 border-b-PRIMARY_COLOR_DARK" />
          <div className="grid lg:grid-cols-4 gap-8  pt-[40px] md:pt-[30px] ">
            <div className="our_services_footer  md:pt-[20px]  text-[#FFFFFF]" >
              <div className=" md:mb-0 ">
                <h2 className="text-[21px] font-medium	 uppercase ">Our Services</h2>
              </div>
              <div className="flex mt-6">
                <NavLink
                  onClick={() => handleNavLinkClick("/enterprise-infrastructure-services")}
                  to="/enterprise-infrastructure-services"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet.svg" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px]  hover:font-bold">Enterprise Infrastructure
                    Services</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/enterprise-platform-services")}
                  to="/enterprise-platform-services"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Enterprise Platform Services</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/information-security")}
                  to="/information-security"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Information Security</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/enterprise-planning")}
                  to="/enterprise-planning"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" className="" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Enterprise Planning</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/office-in-a-box")}
                  to="/office-in-a-box"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Office In a Box</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/project-management")}
                  to="/project-management"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Project Management</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/staff-augmentation")}
                  to="/staff-augmentation"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Staff Augmentation</p>
                </NavLink>
              </div>
              <div className="flex pt-2">
                <NavLink
                  onClick={() => handleNavLinkClick("/technology-procurement")}
                  to="/technology-procurement"
                  className='flex  cursor-pointer'
                >
                  <img src="/Homepage/Footer Bullet.svg" alt="Footer Bullet Icon" />
                  <p className="text-[#FFFFFF] text-[16px] pl-3 leading-[20px] hover:font-bold">Technology Procurement & Licensing</p>
                </NavLink>
              </div>

            </div>
            <div className="contact_footer pt-[30px] md:pt-[20px]  text-[#FFFFFF]" >
              <div className=" md:mb-0 ">
                <h2 className="text-[21px] font-medium	uppercase ">Contact Us</h2>
              </div>

              <div className="flex w-[60%] mt-6">
                <img src="/Footer/Location Icon.svg" alt="Location Icon" className="justify-start h-full" />
                <p className="text-[#FFFFFF] text-[16px] pl-4 leading-[20px] ">991 US Highway 22 West Suite 200-45 Bridgewater Township, NJ 08807</p>
              </div>
              <div className="flex w-[60%] pt-6">
                <img src="/Footer/Telephone.svg" alt="Telephone Icon" />
                <p className="text-[#FFFFFF] text-[16px] pl-4 leading-[20px] ">800-683-6283</p>
              </div>
              <div className="flex w-[60%] pt-6">
                <img src="/Footer/Mail Icon.svg" alt="Mail Icon" />
                <p className="text-[#FFFFFF] text-[16px] pl-4 leading-[20px] ">info@ngtsol.com</p>
              </div>
            </div>
            <div className="copyright_footer  pt-[30px] md:pt-[20px]  text-[#FFFFFF]" >
              <div className=" md:mb-0 ">
                <h2 className="text-[21px] font-medium uppercase	 ">Copyright Information</h2>
              </div>


              <p className="mt-6 text-[#FFFFFF] text-[16px]  leading-[20px] w-[75%]">
                © 2024 NextGenIT. All rights reserved. Unauthorized use or duplication of this material without express permission is strictly prohibited.
              </p>
            </div>
            <div className="  pt-[30px]  md:pt-[20px]  text-[#FFFFFF]" >
              <div className=" md:mb-0 ">
                <h2 className="text-[21px] font-medium	 uppercase ">privacy policy</h2>
              </div>


              <p className="text-[#FFFFFF] pt-6 font-[500] text-[16px] leading-[20px] w-[75%] ">
                Your privacy is important to us. We collect and use personal data in accordance with our privacy policy to ensure your information is protected.
              </p>
            </div>

          </div>
          <hr className="mt-[60px] sm:mx-auto border-2 white-divider" />
          <div className=" md:justify-between flex sm:items-center sm:justify-between  ">
            <div className="w-[20%]">

            </div>
            {fullpageApi ? (
              <div onClick={() => navigateToSection(1)}>
                <p className="p-2 px-6 text-[20px] text-[#006CFC] font-[600] bg-[#FFFFFF] cursor-pointer">
                  Scroll to Top
                </p>
              </div>
            ) : (
              <div onClick={scrollToTop}>
                <p className="p-2 px-6 text-[20px] text-[#006CFC] font-[600] bg-[#FFFFFF] cursor-pointer">
                  Scroll to Top
                </p>
              </div>
            )}

            <div className="flex py-[11px] bg-white">
              <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                <img src="/Footer/Instagram Icon.svg" alt="Youtube Icon" className="h-[24px] mx-4" />
              </a>
              <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                <img src="/Footer/Youtube Icon.svg" alt="Youtube Icon" className="h-[25px] mx-4" />
              </a>
              <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                <img src="/Footer/Twitter Icon.svg" alt="Twitter Icon" className="h-[29px] mx-4" />
              </a>
              <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                <img src="/Footer/Linkedin Icon.svg" alt="Linkedin Icon" className="h-[25px] mx-4 " />
              </a>
              <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                <img src="/Footer/Facebook Icon.svg" alt="Facebook Icon" className="h-[25px] mx-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
