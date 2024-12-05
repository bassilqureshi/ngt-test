import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import VectorWithText from "../../svgs/vectorWithText";
import Lottie from "lottie-react";
import Careeranimation from "../../Career.json";
import { Link } from "react-router-dom";
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import * as Action from '../../store/actions';

const Careers = () => {
  const dispatch = useEnhancedDispatch();
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const data = await dispatch(Action.getJobsListWithLimit(4));
      setJobsList(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextContent = () => {
    if (currentIndex < jobsList.length - 1) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobsList.length);
        setShowContent(true);
      }, 300);
    }
  };

  const handlePreviousContent = () => {
    if (currentIndex > 0) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jobsList.length) % jobsList.length);
        setShowContent(true);
      }, 300);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const content = jobsList[currentIndex];
  const previousContent = jobsList[(currentIndex - 1 + jobsList.length) % jobsList.length];
  const nextContent = jobsList[(currentIndex + 1) % jobsList.length];

  return (
    <>
      <div className="grid ">
        <div className="relative">
          <div className="lottie_main_animation_career lg:w-[365px] w-[330px] ml-[-90px] lg:ml-[80px] xl:w-[470px] xl:ml-[120px] 2xl:w-[490px] 2xl:ml-[170px]">
            <Lottie animationData={Careeranimation} loop={true} />
          </div>
          <div className="main_heading_career_home absolute top-[50%] lg:top-16 lg:flex inset-0">
            <div className="heading_lottie_title flex flex-col justify-center items-start pl-6 w-[95%] lg:pl-[50px] xl:pl-[12vw]">
              <h3 className="text-[14px] md:text-[20px] leading-[26px] font-[200] lg:w-[70%] lg:ml-[200px] xl:ml-[160px] text-[#9fa6b6]">
                Success happens when we stay true to our values and goals
              </h3>
            </div>
            <div className="cant_wait_sec lg:w-[100%] items-center mt-[30%] md:mt-[20%] lg:mt-0 flex pl-6 lg:pl-36">
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to="/jobs/"
                className="bg-[#006CFC] w-[90%] md:w-[60%] lg:w-[70%]"
              >
                <div className="career-animate h-[142px] w-[100%] cursor-pointer bg-[#45CEA5]">
                  <p className="wait_title text-[20px] md:text-[24px] text-white lg:w-[90%] xl:w-[80%] md:pl-4">
                    Can't wait to see all the job offers?
                  </p>
                  <p className="wait_link text-[14px] text-white pt-2 md:pl-4">Click here to view available jobs</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-full lg:flex lg:justify-center text-center relative pb-10">
        <div className="relative flex flex-col items-center w-full lg:w-[80%] p-4 lg:p-0">

          {/* Previous Button */}
          <div className="previous_btn_career absolute left-[-60px] top-[50%] transform -translate-y-[50%] flex flex-col items-center justify-center">
            <div
              onClick={handlePreviousContent}
              className={`bg-[#45CEA5] text-white font-semibold h-[182px] w-[290px] text-[19px] rounded-[20px] shadow-md cursor-pointer ${currentIndex === 0 ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {previousContent?.title}
            </div>
            <p className="text-gray-500 font-medium mt-2 text-lg">Previous</p>
          </div>

          {/* Job Card (Center Slider) */}
          {content && (
            <div
              className={`center_slider_sec border-2 text-left w-full lg:w-[50%] p-6 rounded-xl border-[#eeeeee] transition-opacity duration-300 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* <p className="font-medium text-sm lg:text-lg text-[#555555]">
                {formatDate(content.createdUtc)}
              </p> */}
              <p className="font-semibold text-lg lg:text-2xl mt-2">{content.title}</p>
              <div className="flex gap-3 mt-4">
                <div className="bg-[#F5F5F5] py-2 px-3 rounded-md text-xs font-bold text-[#555555]">
                  {content.jobType}
                </div>
              </div>
              <p className="font-medium text-sm lg:text-lg text-[#555555] mt-6">
                {truncateDescription(content.description, 100)}
              </p>
              <div className="w-[70%] mt-6 border-b border-gray-200"></div>
              <Link
                to={`/job-details/${content.id}/`}
                className="mt-4 bg-[#006CFC] text-white py-2 px-4 rounded-md font-semibold text-sm inline-block lg:text-base"
              >
                View Details
              </Link>
            </div>
          )}

          {/* Slide Control Buttons */}
          <div className="slider_navigation mt-8 flex gap-6">
            <img
              src="/Homepage/Career button left.svg"
              alt="Career button left"
              onClick={handlePreviousContent}
              className={`cursor-pointer previous_nav h-[33px] md:h-[64px] ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <img
              src="/Homepage/Career button right.svg"
              alt="Career button right"
              onClick={handleNextContent}
              className={`cursor-pointer next_nav h-[33px] md:h-[64px] ${currentIndex >= jobsList.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </div>

          {/* Next Button */}
          <div className="next_btn_career absolute right-[-60px] top-[50%] transform -translate-y-[50%] flex flex-col items-center justify-center">
            <div
              onClick={handleNextContent}
              className={`bg-[#006CFC] text-white font-semibold h-[182px] w-[290px] text-[19px] rounded-[20px] shadow-md cursor-pointer ${currentIndex >= jobsList.length - 1 ? 'opacity-50 pointer-events-none' : ''}`}
            >
              {nextContent?.title}
            </div>
            <p className="text-gray-500 font-medium mt-2 text-lg">Next</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
