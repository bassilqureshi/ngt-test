import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";

const ImageGrid = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e) => {
    if (isHovered) {
      const { clientX, clientY } = e;
      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;
      setPosition({ x: clientX - windowCenterX, y: clientY - windowCenterY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>

      <section className="place-images">
        <Box
          style={{ zIndex: 99 }}
          data-aos="zoom-in"
          data-aos-offset="50"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="place_images_logo absolute inset-0 top-[30vh] md:top-[55vh] lg:top-[-20vh] 2xl:top-[5vh] flex justify-center items-center"
        >
          <img
            src="/About/AboutImgLogo.svg"
            className="w-[150px] md:w-[300px] lg:w-[550px] z-10 attract"
            style={{
              transform: `translate(${position.x * 0.037}px, ${position.y * 0.037}px)`,
              transition: 'transform 0.5s ease',
            }}
            alt="Center Image"
          />
        </Box>
        {/* <img src="AboutImgLogo.svg" className="parallex_logo" alt="Main Logo"> */}
        <div className="row expanded align-center">
          <div className="xxlarge-14">
            <div className="row expanded">
              <div className="xxlarge-8 small-16 columns">
                <div className="top-left-image">
                  <div className="block-bg-cover js-parallax-image"
                    data-friction=".6">
                    <picture>
                      <img className="element-cover"
                        src="/Career/1.png"
                        alt=""/>
                    </picture>
                  </div>
                </div>
                <div className="bottom-left-image">
                  <div className="block-bg-cover js-parallax-image"
                    data-friction=".3">
                    <picture>
                      <img className="element-cover"
                        src="/Career/3.png"
                        alt=""/>
                    </picture>
                  </div>
                </div>
              </div>
              <div className="xxlarge-8 small-16 columns">
                <div className="top-right-image">
                  <div className="block-bg-cover js-parallax-image"
                    data-friction=".9">
                    <picture>
                      <img className="element-cover"
                        src="/Career/2.png"
                        alt/>
                    </picture>
                  </div>
                </div>
                <div className="bottom-right-image">
                  <div className="block-bg-cover js-parallax-image"
                    data-friction=".7">
                    <picture>
                      <img className="element-cover"
                        src="/Career/4.png"
                        alt/>
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='flex  justify-center'>
        <div className="relative grid grid-cols-2 px-4 xl:ml-10 gap-x-3 lg:gap-x-6 mt-20 lg:mt-52 ">
          <div className="relative col-span-2 flex justify-center items-center">
            <Box
              data-aos="zoom-in"
              data-aos-offset="50"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" absolute inset-0 top-[30vh] md:top-[55vh] lg:top-[80vh] 2xl:top-[65vh] flex justify-center items-center"
            >
              <img
                src="/About/AboutImgLogo.svg"
                className="w-[150px] md:w-[300px] lg:w-[550px] z-10 attract"
                style={{
                  transform: `translate(${position.x * 0.037}px, ${position.y * 0.037}px)`,
                  transition: 'transform 0.5s ease',
                }}
                alt="Center Image"
              />
            </Box>
          </div>
          <div className="col_1Img">
            <img src="/Career/1.png" className="w-[100%]" />
            <img src="/Career/3.png" className="w-[100%] mt-[20px]" />
          </div>
          <div className="flex flex-col">
            <img src="/Career/2.png" className="mt-12 w-[501px]" />
            <img src="/Career/4.png" className="mt-3 lg:mt-4 w-[453px]" />
          </div>
        </div>
      </div> */}

    </>
  );
};

export default ImageGrid;
