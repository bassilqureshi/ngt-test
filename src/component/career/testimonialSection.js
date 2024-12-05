import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const SliderSettings = {
    dots: true,
    arrows: false,
    draggable: false,
    cssEase: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
    speed: 1000,
    infinite: true,  // Ensure infinite loop is enabled
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  return (
    <>
      <section className="row expanded align-center testimonial-section-wrapper">
        <div className="xxlarge-9 large-10 small-14 xsmall-14 pos-rel">
          <svg viewBox="0 0 679.18 638.02">
            <path
              d="M351.61 637.99c-49 0-85.65-18.1-111.93-55.34-22.25-31.52-35.19-73.92-48.9-118.8-12.62-41.32-25.66-84.06-47.22-125.64-13.81-26.65-39.87-48.7-65.07-70-20.27-17.15-41.24-34.89-56.19-55.38-18.39-25.19-25.29-51.19-21.12-79.46C9.44 77.41 50.43 38.82 123.01 18.68 176.01 3.99 247.27-1.81 347.34.49c95.91 2.21 167.93 9.81 220.18 23.23 33.49 8.62 58.75 19.51 77.07 33.27 28.58 21.48 34.58 46.5 34.58 63.71 0 66.73-45.55 110.55-85.74 149.22-23.61 22.71-45.91 44.17-54.89 66.51-18.53 46.06-28.77 90.93-37.81 130.56-10.75 47.07-20 87.72-40 118.23-23.32 35.52-59 52.77-109.12 52.77z" />
          </svg>
          <div className="testimonials-section">
            <Slider {...SliderSettings}>

              <div className="testimonial-content">
                {/* <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av4.png"
                    alt="Testimonial Photo" />
                </div> */}
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av1.png"
                    alt="Testimonial Photo" />
                </div>
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>
              <div className="testimonial-content">
                {/* <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av2.png"
                    alt="Testimonial Photo" />
                </div> */}
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>
              <div className="testimonial-content">
                {/* <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av2.png"
                    alt="Testimonial Photo" />
                </div> */}
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>
              <div className="testimonial-content">
                {/* <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av3.png"
                    alt="Testimonial Photo" />
                </div> */}
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>
              <div className="testimonial-content">
                {/* <div className="testimonial-picture block-bg-cover">
                  <img className="element-cover"
                    src="/Career/av4.png"
                    alt="Testimonial Photo" />
                </div> */}
                <h2>“The company's personalized career plan and continuous learning opportunities have empowered me to grow professionally. Through supportive partnerships and engaging events, I feel valued and motivated to excel.”</h2>
                <h3>Michael Jameson - Front-end Developer</h3>
              </div>

            </Slider>
          </div>
        </div>
      </section>
      {/* testimonials-section */}
    </>
  );
};

export default TestimonialSection;
