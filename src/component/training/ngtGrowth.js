import React, { useEffect, useRef } from "react";

const NgtGrowth = () => {
  return (
    <section className="ngt_offers-section ngt_growth_sec">
        <div className="ngt_container">
          <h1 className="main_heading_ngt">#NGTgrowth</h1>
          <div className="ngt_row">
            <div className="ngt_col-lg-1"></div>
            <div className="ngt_col-lg-5 ngt_offer-box offer_box_1">
              <img src="/Training/square-shape.svg" className="shape_img_box" />
              <div className="ngt_offer-card">
                <h3><img src="/Training/logo-light.svg" /> Who Can Benefit?</h3>
                <p>Our training programs are designed for professionals at all stages of their careers, from those just starting out to seasoned experts looking to expand their skillset. Whether you’re interested in improving your technical abilities, enhancing your strategic thinking, or staying ahead in an ever-changing industry, NGT Professional Trainings help you achieve your professional goals.</p>
              </div>
            </div>
            <div className="ngt_col-lg-5 ngt_offer-box offer_box_2">
              <img src="/Training/tri-shape.svg" className="shape_img_box" />
              <div className="ngt_offer-card">
                <h3><img src="/Training/logo-dark.svg" />Start Your Journey with NGTSol Professional Trainings</h3>
                <p>We are committed to helping you acquire the skills necessary to achieve your professional goals. Explore our training offerings and take the first step toward empowering your future today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default NgtGrowth;
