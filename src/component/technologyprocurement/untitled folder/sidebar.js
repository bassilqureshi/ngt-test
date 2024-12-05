import React, { useState, useEffect } from "react";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [progress, setProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]); // Track visible items
  const [isVisible, setIsVisible] = useState(false); // Track sidebar visibility

  const sectionNames = {
    "who-we-are": "SECURITY CONSULTANCY",
    "our-responsibility": "SECURITY OPERATION CENTER",
    "our-board": "GOVERNANCE RISK & COMPLIANCE",
  
  };

  const handleClick = (sectionId) => {
    setActiveItem(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const updateProgressBar = () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 110;
    setProgress(scrollPercent);

    if (scrollPercent >= 8 && scrollPercent <= 99) {
      if (!isVisible) {
        setIsVisible(true);
        setVisibleItems([]);
        Object.keys(sectionNames).forEach((section, index) => {
          setTimeout(() => {
            setVisibleItems((prevVisibleItems) => [
              ...prevVisibleItems,
              section,
            ]);
          }, index * 250); // 250ms delay between items
        });
      }
    } else if (isVisible) {
      setIsVisible(false);
      Object.keys(sectionNames).forEach((section, index) => {
        setTimeout(() => {
          setVisibleItems((prevVisibleItems) =>
            prevVisibleItems.filter((item) => item !== section)
          );
        }, index * 250); // 250ms delay between items
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgressBar);
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, [isVisible]);

  useEffect(() => {
    const sections = Object.keys(sectionNames);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      {visibleItems.length > 0 && (
        <div className="vertical-menu-wrapper  enable lg:flex hidden fixed z-30 lg:top-[70px]  2xl:top-[140px]">
          <div className="relative  mt-[-75px]">
            <div
              className="absolute top-0 right-0 w-1"
              style={{ height: "100%", transform: "translateX(50%)" }}
            ></div>
            <div
              className="absolute top-0 left-[80px] w-[1px] bg-black"
              style={{
                height: `${progress}%`,
                transform: "translateX(50%)",
                transition: "height 0.5s ease-in-out",
              }}
            ></div>
          </div>
          <ul className="lg:space-y-48 2xl:space-y-56">
            {Object.keys(sectionNames).map((section, index) => {
              const isActive =
                index <=
                Object.keys(sectionNames).indexOf(activeItem);

              return (
                <li
                  key={section}
                  data-target={section}
                  className={`transform transition-transform duration-300 -rotate-90 text-[11px] ml-[-30px] text-center   cursor-pointer ${
                    isActive ? "text-black" : "text-gray-400"
                  } ${
                    visibleItems.includes(section)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } transition-all ease-out duration-500`}
                  onClick={() => handleClick(section)}
                >
                  {sectionNames[section]}
                  <span
                    className={`container-height block transform ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
