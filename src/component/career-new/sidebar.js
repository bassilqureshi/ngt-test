import React from "react";

const SideBar = ({ activeSection, fullpageApi }) => {
  // Function to handle the click and navigate to the section
  const navigateToSection = (sectionIndex) => {
    if (fullpageApi) {
      fullpageApi.moveTo(sectionIndex + 1); // fullPage.js uses 1-based index
    }
  };

  return (
    <div className="sidebar_main_wrapper vertical-menu-wrapper lg:flex hidden absolute z-30">
      <ul className="lg:space-y-20 2xl:space-y-28">
        <li
          className={`who-we-are transition-all ease-out duration-500 transform -rotate-90 text-[11px] text-center cursor-pointer text-black ${
            activeSection === 1 ? "active" : ""
          }`}
          onClick={() => navigateToSection(1)} // Navigates to section 1
        >
          Who we are
        </li>
        <li
          className={`our-story transition-all ease-out duration-500 transform -rotate-90 text-[11px] text-center cursor-pointer text-black ${
            activeSection === 5 ? "active" : ""
          }`}
          onClick={() => navigateToSection(5)} // Navigates to section 5
        >
          Our Story
        </li>
        <li
          className={`our-board transition-all ease-out duration-500 transform -rotate-90 text-[11px] text-center cursor-pointer text-black ${
            activeSection === 6 ? "active" : ""
          }`}
          onClick={() => navigateToSection(6)} // Navigates to section 6
        >
          Our Board
        </li>
        <li
          className={`our-team transition-all ease-out duration-500 transform -rotate-90 text-[11px] text-center cursor-pointer text-black ${
            activeSection === 7 ? "active" : ""
          }`}
          onClick={() => navigateToSection(7)} // Navigates to section 7
        >
          Our Team
        </li>
        <li
          className={`ceo-message transition-all ease-out duration-500 transform -rotate-90 text-[11px] text-center cursor-pointer text-black ${
            activeSection === 9 ? "active" : ""
          }`}
          onClick={() => navigateToSection(9)} // Navigates to section 9
        >
          CEO Message
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
