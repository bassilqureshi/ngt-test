import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lottie from "lottie-react";
import TestimonialShape from "../../TestimonialShape.json";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    // centerPadding: '360px',
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };
  const testimonials = [
    {
      id: 1,
      text: 'Working at NGTSOL has been a transformative experience. The organization’s commitment to innovation and technical excellence allows me to stay at the forefront of network engineering. With a collaborative environment and access to cutting-edge tools, I feel constantly challenged and supported to reach my potential. The organization values not only technical skill but also professional growth, and it’s inspiring to be part of a team that emphasizes both.',
      author: 'James Carter',
      role: 'Network Engineer',
      // avatar: '/Career/testimonial-img.png',
    },
    {
      id: 2,
      text: 'At NGTSOL, every day brings new opportunities to learn and grow. The culture here is one of encouragement and teamwork, where everyone’s voice matters. The leadership genuinely cares about our well-being and professional development, and this positive culture motivates me to deliver the best service possible to our clients. I’ve never felt more valued as an engineer and am proud to be part of a company that upholds integrity, expertise, and support at its core.',
      author: 'Mark Wood',
      role: 'Technical Support Engineer',
      // avatar: '/Career/testimonial-img.png',
    },
    {
      id: 3,
      text: 'The collaborative culture at NGTSOL is outstanding, making it a great place for project managers to thrive. I’m given the tools and trust to lead complex projects, and our team’s combined drive for success makes every project feel purposeful. Its values are clear—customer satisfaction, innovation, and teamwork—and I feel supported at every level to meet these goals. It’s rewarding to work in an environment that truly values our input and growth.',
      author: 'John Bradley',
      role: 'Project Manager',
      // avatar: '/Career/testimonial-img.png',
    },
    {
      id: 4,
      text: 'Being part of NGTSOL is an incredible experience. The opportunities to innovate and tackle real-world challenges make every day exciting. The company’s emphasis on continued learning and advancement has helped me refine my skills and broaden my knowledge in integration engineering. Beyond the technical, the organization genuinely prioritizes a culture of respect and mutual support, making it feel like much more than just a workplace.',
      author: 'Edward Thompson',
      role: 'Integration Engineer',
      // avatar: '/Career/testimonial-img.png',
    },
    {
      id: 5,
      text: 'Cybersecurity is a constantly evolving field, and NGTSOL provides the resources and training needed to stay ahead of emerging threats. The company culture is one of inclusiveness and forward-thinking, and I appreciate its dedication to both professional and personal growth. Knowing my team is always there to support me makes my work that much more rewarding. Working here means being part of a trusted community where everyone’s efforts are valued and respected.',
      author: 'Michael Lewis',
      role: 'Cyber Security Consultant',
      // avatar: '/Career/testimonial-img.png',
    },
  ];

  return (
    <div className='main_tesimonial_sec'>
      <div id="our-responsibility" className="lg:flex flex-col hidden">
        <div className="relative pt-12 mb-20 main_animation_sec">
          <div className="lottie_animation_main">
            <Lottie animationData={TestimonialShape} loop={true} />
            <h3 className="lottie_animation_text text-[17px]  leading-[20px] lg:leading-[26px] font-[300] pt-20 lg:pt-16 text-[#9fa6b6]">
              We take pride in our ongoing, consistent growth annually.
            </h3>
          </div>
        </div>
      </div>
      <section className="homepage__testimonials">
        <div className="homepage__testimonials__slider">
          {/* <div className='testimonial_heading'>
            <h3>
              What Our Clients Say About Us
            </h3>
          </div> */}

          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="single-testimonial">
                <div className="single-testimonial__quote">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="testimonial-avatar"
                  /> */}
                  <h5>"{testimonial.text}"</h5>
                </div>
                <div className='testimonial_footer'>
                  <div className='testimonial_footer_inner'>
                    <img
                      src='/Career/quote-icon.svg'
                      alt='quote_mark'
                      className="testimonial-avatar"
                    />
                    <div>
                      <div className="single-testimonial__person">{testimonial.author}</div>
                      <div className="single-testimonial__position">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
