import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import JobOffersAnimation from "../../job-offers.json";
import { useEnhancedDispatch } from '../../helpers/reduxHooks';
import * as Action from '../../store/actions';

const JobOffers = () => {
  const dispatch = useEnhancedDispatch();
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const data = await dispatch(Action.getJobsListWithLimit(4));
      console.log("Fetched jobs:", data); // Debugging
      setJobsList(data || []); // Ensure jobsList is always an array
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
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

  return (
    <>
      <section className="ngt_offers-section">
        <div className="ngt_container">
          <div className="ngt_row">
            <div className="ngt_col-lg-6 ngt_offer_heading">
              <div className="relative pt-12 mb-20 main_animation_sec">
                <div className="lottie_animation_main">
                  <Lottie animationData={JobOffersAnimation} loop={true} />
                  <h3 className="lottie_animation_text text-[17px] leading-[20px] lg:leading-[26px] font-[300] text-[#9fa6b6]">
                    Success happens when we stay true to our values and goals
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="ngt_row">
            <div className="ngt_col-lg-2"></div>
            {!loading && jobsList.length === 0 && (
              <div className="ngt_col-lg-12">
                <p>No job offers available at the moment. Please check back later.</p>
              </div>
            )}
            {!loading && jobsList.slice(0, 2).map((job, index) => (
              <div
                key={index}
                className={`ngt_col-lg-4 ngt_offer-box offer_box_${index + 1} career-animate`}
              >
                <div className="ngt_offer-card">
                  <p>Can't wait to see <br />{index === 0 ? "the tech offers?" : "the corporate offers?"}</p>
                  <p className="card_btn_link">
                    <a href="#">{index === 0 ? "Click here to see the available offers." : "Click here and send a spontaneous application."}</a>
                  </p>
                  <div className="ngt_offer-details">
                    <p className="ngt_offer-date">{formatDate(job.createdUtc)}</p>
                    <h3>{job?.title || "N/A"}</h3>
                    <div className="ngt_offer-tags">
                      <span className="ngt_tag">{job.jobType}</span>
                    
                      {/* {job?.tags?.map((tag, i) => (
                        <span key={i} className="ngt_tag">{tag}</span>
                      ))} */}
                    </div>
                    <div className="ngt_offer_footer">
                      {/* <p className="ngt_offer-rate">${job?.rate || "N/A"} /hr</p> */}
                      <NavLink
                        to={`/job-details/${job?.id || ""}/`}
                        className="ngt_see-more-btn"
                      >
                        See More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobOffers;
