import React, { useEffect, useRef } from "react";

const ProfessionalTrainings = () => {
  return (
    <section class="ngt_professional_training_sec">
      <div class="ngt_container">
        <div class="ngt_row">
          <div class="ngt_col-lg-3 heading_sec_prof">
            <img src="/Training/training-heading.svg" />
          </div>
          <div class="ngt_col-lg-9 icon_box_sec">
            <div class="ngt_row">
              <div class="ngt_col-lg-4">
                <div className="icon_box">
                  <img src="/Training/1.svg" />
                  <h3>Comprehensive Skill Development</h3>
                  <p>Our training programs are structured to offer a well-rounded learning experience, covering the essential aspects of modern enterprise operations.</p>
                </div>
              </div>
              <div class="ngt_col-lg-4">
                <div className="icon_box">
                  <img src="/Training/2.svg" />
                  <h3>Expert-Led Sessions</h3>
                  <p>We craft a career path that aligns with your professional aspirations and goals. Your journey is our priority—we listen, adjust, and champion your growth at your pace and driven by your motivations.</p>
                </div>
              </div>
              <div class="ngt_col-lg-4">
                <div className="icon_box">
                  <img src="/Training/3.svg" />
                  <h3>Flexible Learning Solutions</h3>
                  <p>Whether you’re seeking in-depth courses, hands-on workshops, or a blended learning experience, we provide flexible options that cater to your learning preferences.</p>
                </div>
              </div>
            </div>
            <div class="ngt_row">
              <div class="ngt_col-lg-2"></div>
              <div class="ngt_col-lg-4">
                <div className="icon_box mb-0">
                  <img src="/Training/4.svg" />
                  <h3>Current and Relevant Content</h3>
                  <p>Stay ahead of the curve with training that reflects the latest trends and developments in the enterprise technology landscape, ensuring your skills remain relevant and up-to-date.</p>
                </div>
              </div>
              <div class="ngt_col-lg-4">
                <div className="icon_box mb-0">
                  <img src="/Training/5.svg" />
                  <h3>Engaging and Interactive</h3>
                  <p>We emphasize interactive learning, ensuring that our sessions are not just informative but also engaging, helping you to apply new skills effectively in real-world scenarios.</p>
                </div>
              </div>
              <div class="ngt_col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTrainings;
