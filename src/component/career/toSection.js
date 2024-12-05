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
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3 style={{height: '178px'}}>Exceptional Professional Opportunities</h3>
                <p>Thrilling national and global projects that meet your expectations, with full backing throughout the process.
                  <span className="color-purple">We aim to keep you motivated and content.</span></p>
              </div>
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3>Personalized Professional Development Plan</h3>
                <p>We create a career path that aligns with your professional goals and dreams.
                  <span className="color-purple">We listen, refine, and champion your progress according to your pace and motivations.</span>
                </p>
              </div>
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3 style={{height: '174px'}}>Trainings & Certifications</h3>
                <p>Expect unwavering support for your skill development. 
                  <span className="color-purple">We provide training in both soft and hard skills, from short-term to long-term, as well as essential workshops.</span>
                </p>
              </div>
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3 style={{height: '92px'}}>Benefits</h3>
                <p>Access a variety of benefits and discounts,<span
                  className="color-purple">including banking, sports & fitness, entertainment, communications, insurance, education, photography, hospitality, and other perks!</span></p>
              </div>
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3>NGT Rewards & Surprises</h3>
                <p>Your referrals to NGTSOL earn guaranteed rewards—no luck necessary!
                  <span className="color-purple">Additionally, enjoy exclusive surprises on your birthday and other special occasions. Ready to explore more?</span></p>
              </div>
              <div className="columns pos-rel values">
                <svg viewBox="0 0 9 8.5">
                  <path
                    d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                </svg>
                <h3>Events & Celebrations</h3>
                <p>Affinity is about more than work; it's about connection, trust, and creating lasting memories.<span
                  className="color-purple">We strive to make every interaction a rewarding experience, ensuring you always feel valued and inspired.</span></p>
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
