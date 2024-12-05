import React, { useState } from "react";
import Button from '@mui/material/Button';
import Flow from "../../Flow 1.json";
import Lottie from "lottie-react";
import FlowNew from "../../herosectionshape.json";
import Scroll from "../../scroll.json";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false); // State to control video display

  const handlePlayVideo = () => {
    setShowVideo(true); // Show full-screen video
  };

  const handleCloseVideo = () => {
    setShowVideo(false); // Close full-screen video
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
          src="/Homepage/video-new.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Main Hero Section Content */}
        {!showVideo && (
          <>
            <div className="relative z-10">
              <div className="flex gap-x-10 text-center items-center justify-center">
                <img
                  src="/Homepage/video-play-btn.svg"
                  alt="Video Play Button"
                  className="h-[80px] lg:h-[98px] ml-4 cursor-pointer"
                  onClick={handlePlayVideo} // Play video when clicked
                />
                <h1 className="text-[50px] lg:text-[45px] xl:text-[55px] text-white font-[700] uppercase ">
                  Better, Faster & Efficient!
                </h1>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </>
        )}

        {/* Full-Screen Video */}
        {showVideo && (
          <div className="fixed inset-0  z-50 flex justify-center items-center">
            <video
              src="/Homepage/video-1080.mp4"
              className="w-full h-full object-cover"
              autoPlay
              controls={false} // Hide default video controls
              muted
            />
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={handleCloseVideo}
            >
              ✕
            </button>
          </div>
        )}

        {/* Social Media and Bottom Content */}
        <div className="absolute bottom-0 w-full ">
          <div className="hidden lg:flex justify-between items-center z-50 ">
            <div
              className="w-[90%] lg:pl-[40px] xl:pl-[60px] lg:mt-[470px] xl:mt-[520px]"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="text-[#FFFFFF]">Follow NGTSOL </p>
              <img
                src="/Homepage/Underline Hero.svg"
                alt="Underline Hero"
                className="h-[3px] lg:mx-3 xl:mx-4"
              />
              {/* Social Media Links */}
              <a
                href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/Homepage/Linkedin hero.svg"
                  alt="Linkedin Icon"
                  className="lg:h-[15px] xl:h-[20px] mr-4"
                />
              </a>
              <a
                href="https://www.facebook.com/NGTSolUSA"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/Homepage/Facebook hero.svg"
                  alt="Facebook Icon"
                  className="lg:h-[15px] xl:h-[20px] mr-4"
                />
              </a>
              <a
                href="https://twitter.com/ngtsol"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/Homepage/Twitter hero.svg"
                  alt="Twitter Icon"
                  className="lg:h-[15px] xl:h-[20px] mr-5"
                />
              </a>
              <a
                href="https://www.youtube.com/@NGTSOLUSA"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/Homepage/Youtube hero.svg"
                  alt="Youtube Icon"
                  className="lg:h-[15px] xl:h-[20px] mr-5"
                />
              </a>
              <a
                href="https://www.instagram.com/ngtsolusa/"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src="/Homepage/Instagram hero.svg"
                  alt="Instagram Icon"
                  className="lg:h-[15px] xl:h-[20px]"
                />
              </a>
            </div>

            {/* Ready to Start Section */}
            <div className="relative w-full h-full flex justify-end items-end">
              <div className="relative lg:w-[395px] lg:top-[300px] xl:w-[465px] xl:top-[368px] lg:mr-[-39px] xl:mr-[-70px] 2xl:mr-[-55px] 2xl:w-[450px] 2xl:top-[355px]">
                <Lottie animationData={FlowNew} loop={true} />
              </div>
              <div className="absolute flex justify-center items-center p-5">
                <div className="flex-col lg:pr-1 xl:pr-3">
                  <p className="font-bold text-[22px] leading-7 text-[#FFFFFF] uppercase">
                    Ready to Start?
                  </p>
                  <p className="font-medium text-[13px] leading-4 text-[#FFFFFF] opacity-70 pt-0">
                    Got a question?
                  </p>
                  <p className="font-medium text-[13px] leading-4 text-[#FFFFFF] opacity-70">
                    Ready to start an Engagement?
                  </p>
                  <p className="font-medium text-[13px] leading-4 text-[#FFFFFF] opacity-70">
                    Interested in becoming an NGTSOLPlayer?
                  </p>
                  <p className="font-medium text-[13px] leading-4 text-[#FFFFFF] opacity-70">
                    Let's start!
                  </p>
                  <a href="/contact-us">
                    <Button
                      variant="contained"
                      style={{
                        width: "170px",
                        backgroundColor: "#FFFFFF",
                        padding: "14px 12px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#006CFC",
                        marginTop: "18px",
                        textTransform: "none",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      Let’s Connect!
                    </Button>
                  </a>
                </div>
                <div className="hidden xl:block w-[20px]">
                  <div className="-rotate-90">
                    <span className="text-[17px]">Scroll</span>
                  </div>
                  <div className="w-[100%] justify-center flex items-center mt-3">
                    <Lottie animationData={Scroll} loop={true} />
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

export default HeroSection;
