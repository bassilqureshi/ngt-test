import React, { useEffect, useState } from 'react';
import useSequenceDance from "../../hooks/useSequenceDance";

const ToSection = () => {
  const containerRef = useSequenceDance();

  return (
    <>
      <section className="to-section to_main_sec" ref={containerRef}>
        <div className="row expanded align-center">
          <div className="xxlarge-10 medium-12 small-14 columns pos-rel">
            <div className="row expanded xxlarge-up-3 medium-up-2 xsmall-up-1">
              <div className="columns pos-rel d-flex values">
                <div className='colum_count'>1</div>
                <div className='colum_content'>
                  <h3>Exceptional Professional Opportunities</h3>
                  <p>Thrilling national and global projects that meet your expectations, with full backing throughout the process.
                    <span className="color-purple">We aim to keep you motivated and content.</span></p>
                </div>
              </div>
              <div className="columns pos-rel d-flex values">
                <div className='colum_count'>2</div>
                <div className='colum_content'>
                  <h3>Personalized Professional Development Plan</h3>
                  <p>We create a career path that aligns with your professional goals and dreams.
                    <span className="color-purple">We listen, refine, and champion your progress according to your pace and motivations.</span>
                  </p>
                </div>
              </div>
              <div className="columns pos-rel d-flex values">
                <div className='colum_count'>3</div>
                <div className='colum_content'>
                  <h3>Trainings & Certifications</h3>
                  <p>Expect unwavering support for your skill development.
                    <span className="color-purple">We provide training in both soft and hard skills, from short-term to long-term, as well as essential workshops.</span>
                  </p>
                </div>
              </div>
              <div className="columns pos-rel d-flex values mb-0">
                <div className='colum_count'>4</div>
                <div className='colum_content'>
                  <h3>Benefits</h3>
                  <p>Access a variety of benefits and discounts,<span
                    className="color-purple">including banking, sports & fitness, entertainment, communications, insurance, education, photography, hospitality, and other perks!</span></p>
                </div>
              </div>
              <div className="columns pos-rel d-flex values mb-0">
                <div className='colum_count'>5</div>
                <div className='colum_content'>
                  <h3>NGTSOL Rewards & Surprises</h3>
                  <p>Your referrals to NGTSOL earn guaranteed rewards—no luck necessary!
                    <span className="color-purple">Additionally, enjoy exclusive surprises on your birthday and other special occasions. Ready to explore more?</span></p>
                </div>
              </div>
              <div className="columns pos-rel d-flex values mb-0">
                <div className='colum_count'>6</div>
                <div className='colum_content'>
                  <h3>Events & Celebrations</h3>
                  <p>NGTSOL is about more than work; it's about connection, trust, and creating lasting memories.<span
                    className="color-purple">We strive to make every interaction a rewarding experience, ensuring you always feel valued and inspired.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* to-section */}
    </>
  );
};

export default ToSection;
