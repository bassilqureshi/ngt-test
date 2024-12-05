import React from 'react';

const Insights = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scroll smooth
    });
  };
  return (
    <div className="page-main page-current">
      <div className="page-toload noticias-page single-noticias-page" data-bodyclass="noticias single-noticias">
        <main className="page-content" role="main">
          <div className="row expanded container medium-collapse">

            <div className="rotate-title">
              <h4>News &amp; Insights</h4>
            </div>

            <div
              className="xxlarge-4 medium-16 medium-offset-0 columns nav-sidebar-column">
              {/* <SideBar /> */}
            </div>
            <div
              className="xxlarge-9 xxlarge-offset-1 medium-14 medium-offset-1 columns full-page-container"
              data-nextNews="true" data-activeNew="10555">
              <article className="full-page-article" data-id="10555">
                <header className="full-page-article-header">
                  <h1>NGTSOL Makes a Strong Impression at GITEX Global 2023</h1>
                  <div className="full-page-article-social">
                    <span className="social-title">Share</span>
                    <ul>
                      <li className="social-item">
                        <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                          <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                          <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                          <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                          <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                          <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>
                <div className="full-page-article-content">
                  <div className="full-page-article-image">
                    <div className="block-bg-cover">
                      <img className="element-cover"
                        src="/Insights/insight-1.png" />
                    </div>
                  </div>

                  <div className="row expanded xsmall-collapse">
                    <div
                      className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
                      <div className="full-page-article-time-category">
                        <time
                          className="full-page-article-date">June 25,
                          2020</time>
                        <div className="full-page-article-category">

                          News

                        </div>
                      </div>
                      <div className="full-page-article-text">
                        <p>NGTSOL proudly showcased its capabilities at GITEX Global, the world’s largest and most influential tech event. As a leading managed IT services company, NGTSOL had the opportunity to present its innovative solutions to a global audience, leaving a lasting impact on industry leaders and tech enthusiasts alike.</p>
                        <p>The event provided an ideal platform for NGTSOL to highlight its cutting-edge offerings, including enterprise infrastructure, platform services, information security, and more. Our team engaged in thought-provoking discussions with key stakeholders, exploring new technologies and partnerships that will shape the future of IT.</p>
                        <p>Participation in GITEX Global aligns with NGTSOL's mission to stay at the forefront of the industry, consistently delivering value and driving digital transformation for businesses worldwide. We look forward to leveraging the insights and connections gained from this event to continue pushing the boundaries of innovation in the IT landscape.</p>
                        <p>As we grow and evolve, NGTSOL remains dedicated to providing unparalleled service and expertise, helping organizations navigate the complexities of the digital world with confidence. Stay tuned for more updates as we continue to make waves in the global tech space!</p>

                      </div>
                    </div>
                  </div>
                  <div className="full-page-article-social">
                    <span className="social-title">Share</span>
                    <ul>
                      <li className="social-item">
                        <a href="https://www.linkedin.com/company/next-generation-technology-solutions/mycompany/" target="_blank" className="cursor-pointer">
                          <img src="/About/Linkedin hero.svg" alt="Linkedin Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.facebook.com/NGTSolUSA" target="_blank" className="cursor-pointer">
                          <img src="/About/Facebook hero.svg" alt="Facebook Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://twitter.com/ngtsol" target="_blank" className="cursor-pointer">
                          <img src="/About/Twitter hero.svg" alt="Twitter Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.youtube.com/@NGTSOLUSA" target="_blank" className="cursor-pointer">
                          <img src="/About/Youtube hero.svg" alt="Youtube Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                      <li className="social-item">
                        <a href="https://www.instagram.com/ngtsolusa/" target="_blank" className="cursor-pointer">
                          <img src="/About/Instagram hero.svg" alt="Instagram Icon" className="lg:h-[15px] xl:h-[20px]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* <div className="next-new-mob">
                <p>Next article</p>
                <h2>NGT is back to our offices!</h2>
                <a href="../affinity-is-back-to-our-offices/index.html"
                  data-remote="true"
                  data-targetClass="noticias"
                  data-title="Affinity is back to our offices!"
                  className="elastic-btn">
                  <svg viewBox="0 0 196 66">
                    <path className="morph-bg"
                      d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
                      data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z" />
                  </svg>
                  <span className="text">View article</span>
                </a>
              </div> */}
              {/* <div className="load-next-wrapper" ref={wrapperRef}>
                <span className="indicator-wrapper">
                  <span
                    className="indicator"
                    ref={indicatorRef}
                    style={{
                      display: 'block',
                      height: '5px',
                      backgroundColor: '#000',
                      width: '0%',
                    }}
                  ></span>
                </span>
                <p>Scroll to load next article</p>
              </div> */}
            </div>
          </div>
        </main>
      </div>
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div >
  );
};

export default Insights;
