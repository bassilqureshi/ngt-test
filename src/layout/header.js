import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);


  useEffect(() => {
    // If the class is applied on a specific element, e.g., a menu element:
    const menu = document.querySelector('.navbar_main');
    menu?.classList.remove('mobile_menu_open');
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServicesDropdown = (isOpen) => {
    setIsServicesDropdownOpen(isOpen);
  };

  // Define route conditions
  const isHomePage = location.pathname === "/";
  const isJobsPage = location.pathname === "/jobs/";
  const isInfoSecurity = location.pathname === "/information-security";
  const tpService = location.pathname === "/technology-procurement";
  const isPMPage = location.pathname === "/project-management";
  const isEnterpriseInfrastructureServices = location.pathname === "/enterprise-infrastructure-services";
  const isStaffAugmentation = location.pathname === "/staff-augmentation";
  const isOfficeInABox = location.pathname === "/office-in-a-box";
  const isServicesPage = location.pathname === "/services";
  const isInsightsRoute = location.pathname === "/insights";
  const isInsightsRouteNew = location.pathname.startsWith("/insights");
  const isSpecificInsightsPage = location.pathname === '/insights/ngtsol-joins-visionaries-at-leap-24';
  const hostLondon = location.pathname === '/insights/ngtsol-hosts-london';
  const serviceKnowledge = location.pathname === '/insights/ngtsol-at-servicenow-knowledge-2024';
  const excellenceCloud = location.pathname === '/insights/excellence-in-infrastructure-and-cloud-services';
  const isTrainingPage = location.pathname === "/training/" || location.pathname === "/training";

  // Check if the route is one of the job-related routes
  const isJobRelatedRoute =
    location.pathname === "/jobs/" ||
    location.pathname === "/jobs" ||
    location.pathname.startsWith("/hr-candidates-list") ||
    location.pathname.startsWith("/job-details") ||
    location.pathname.startsWith("/hr-registration") ||
    location.pathname === "/job-form" ||
    location.pathname.startsWith("/applicant-profile") ||
    location.pathname === "/hr-portal" ||
    location.pathname === "/apply-through-resume" ||
    location.pathname === "/job-details" ||
    location.pathname === "/register-profile";





  return (
    <>
      <nav
        className={`navbar_main ${isInsightsRoute || isInsightsRouteNew || isSpecificInsightsPage || hostLondon || serviceKnowledge || excellenceCloud
          ? 'no_bg_nav bg-transparent insight_navbar navbar_main z-40 absolute top-0 w-full'
          : 'bg-transparent navbar_main z-40 absolute top-0 w-full'
          } ${isJobRelatedRoute
            ? 'job_related_nav'
            : ''
          } ${isServicesPage ? 'is_services_nav' : '' } ${isTrainingPage ? 'is_training_nav' : '' }`}
      >
        {isInsightsRoute}
        <div className="flex items-center justify-between mt-5 p-4 lg:px-6 xl:px-24">
          <a href="/">
            {/* Logic to switch logos based on the routes */}
            {/* <img
              src={isHomePage || isJobRelatedRoute || isStaffAugmentation || isOfficeInABox || isEnterpriseInfrastructureServices || isInfoSecurity || tpService ? "/Homepage/logo-white.svg" : "/Homepage/NgtLogoBlack.svg"}
              className="md:h-[100px] h-[100px] lg:h-[115px] xl:h-[135px]"
              alt="NGT Logo"
            /> */}

            <img
              src={
                isJobRelatedRoute
                  ? "/Homepage/NGTLogojobs.png"
                  : (isHomePage || isStaffAugmentation || isOfficeInABox || isEnterpriseInfrastructureServices || isInfoSecurity || tpService)
                    ? "/Homepage/logo-white.svg"
                    : "/Homepage/NgtLogoBlack.svg"
              }
              className="md:h-[100px] h-[100px] lg:h-[115px] xl:h-[135px]"
              alt="NGT Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={toggleMenu}
              className="toggle_mobile_menu md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h18M1 9h18M1 17h18"
                />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
            {/* <div className="relative hidden md:block lg:mt-[-40px] md:w-40 xl:w-52">
              <div className="absolute inset-y-0 start-0 flex items-center pb-1 ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  style={{ color: "#006CFC" }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-[16px] text-gray-900 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 placeholder:text-white placeholder:font-bold"
                placeholder="Search..."
              />
            </div> */}
          </div>

          <div
            className={`${isMenuOpen ? "block mobile_menu_open" : "hidden"
              } items-center mt-6 justify-between w-full md:flex md:w-auto`}
            id="navbar-search"
          >
            <ul className="flex flex-col items-center justify-center md:space-x-4 xl:space-x-12 md:flex-row lg:mt-[-45px]">
              {/* <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9647BE] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#9647BE] cursor-pointer`
                }
              >
                <li>Home</li>
              </NavLink> */}
              {/* <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9647BE] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#9647BE] cursor-pointer`
                }
              >
                <li>About</li>
              </NavLink> */}
              <NavLink
                to="/about-new"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9647BE] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#9647BE] cursor-pointer`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage ? "text-gray-500" : "text-white"} ${isPMPage ? "text-gray-500" : ""} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li onMouseEnter={() => handleServicesDropdown(true)}
                onMouseLeave={() => handleServicesDropdown(false)} class="relative have_dropdown">
                  <span
                    className="lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer hover:text-[#006CFC]"
                  >
                    Services
                  </span>
                  {isServicesDropdownOpen && (
                  <ul className="absolute dropdown_menu_main top-full left-0  bg-white shadow-lg rounded-lg p-3 space-y-2">
                    <li>
                      <NavLink
                        to="/enterprise-infrastructure-services"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Enterprise Infrastructure Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/enterprise-platform-services"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Enterprise Platform Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/information-security"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Information Security
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/enterprise-planning"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Enterprise Planning
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/office-in-a-box"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Office In a Box
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-management"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Project Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/staff-augmentation"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Staff Augmentation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technology-procurement"
                        className='block text-gray-700 hover:text-blue-600'
                      >
                        Technology Procurement & Licensing
                      </NavLink>
                    </li>

                  </ul>
                  )} 
                </li>
              </NavLink>
              {/* <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#49E2BB] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#49E2BB] cursor-pointer`
                }
              >
                <li>Careers</li>
              </NavLink> */}
              <NavLink
                to="/career-new"
                className={({ isActive }) =>
                  isActive
                    ? "active_career text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>Careers</li>
              </NavLink>

              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  isActive
                    ? "active_insight text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage  || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>Insights</li>
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "active_contact text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>Contact Us</li>
              </NavLink>
              <NavLink
                to="/training"
                className={({ isActive }) =>
                  isActive
                    ? "active_insight text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>Training</li>


              </NavLink>
              {/* <NavLink
                to="/hr-registration"
                className={({ isActive }) =>
                  isActive
                    ? "active_insight text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage || isPMPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>HR-Portal</li>


              </NavLink> */}
              {/* {isJobsPage && (
                <>
                  <NavLink to="/login" className="text-gray-500 hover:text-[#006CFC] cursor-pointer">
                    <li>Login</li>
                  </NavLink>
                  <NavLink to="/logout" className="text-gray-500 hover:text-[#006CFC] cursor-pointer">
                    <li>Logout</li>
                  </NavLink>
                </>
              )} */}
              {/* <NavLink
                to="/training"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#006CFC] lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] cursor-pointer"
                    : `${isHomePage ? "text-white" : isServicesPage ? "text-gray-500" : "text-white"} lg:text-[18px] xl:text-[19px] 2xl:text-[22px] font-[500] leading-[30px] hover:text-[#006CFC] cursor-pointer`
                }
              >
                <li>Training</li>
              </NavLink> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
