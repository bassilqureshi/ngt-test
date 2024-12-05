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
      <div className='queremos-page about_image_grid'>
        <div className='page-content'>
          <div className="place-images">
            <Box
              style={{ zIndex: 99 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="zoom-in place_images_logo absolute inset-0 top-[30vh] md:top-[55vh] lg:top-[2vh] 2xl:top-[5vh] flex justify-center items-center"
            >
              <img
                src="/About/AboutImgLogo.svg"
                className=" w-[150px] md:w-[300px] lg:w-[410px] z-10 attract"
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
                            alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="top-left-image">
                      <div className="block-bg-cover js-parallax-image"
                        data-friction=".6">
                        <picture>
                          <img className="element-cover"
                            src="/Career/2.png"
                            alt="" />
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
                            src="/Career/3.png"
                            alt />
                        </picture>
                      </div>
                    </div>
                    <div className="bottom-right-image">
                      <div className="block-bg-cover js-parallax-image"
                        data-friction=".7">
                        <picture>
                          <img className="element-cover"
                            src="/Career/4.png"
                            alt />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ImageGrid;
